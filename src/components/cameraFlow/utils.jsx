import * as posenet from '@tensorflow-models/posenet'

const pointRadius = 10

export const config = {
  videoWidth: 900,
  videoHeight: 400,
  flipHorizontal: true,
  algorithm: 'single-pose',
  showVideo: true,
  showSkeleton: true,
  showPoints: true,
  minPoseConfidence: 0.1,
  minPartConfidence: 0.5,
  maxPoseDetections: 2,
  nmsRadius: 20,
  outputStride: 16,
  imageScaleFactor: 0.5,
  skeletonColor: '#8B0000',
  skeletonLineWidth: 6,
  loadingText: 'Loading...please be patient...'
}

function toTuple({ x, y }) {
  return [x, y]
}

export function drawKeyPoints(
  keypoints,
  minConfidence,
  canvasContext,
  scale = 1
) {
  keypoints.forEach(keypoint => {
    if (keypoint.score >= minConfidence) {
      const { x, y } = keypoint.position
      canvasContext.beginPath()
      canvasContext.arc(x, y * scale, pointRadius, 0, 2 * Math.PI)
      canvasContext.fillStyle = "#FFFFFF"
      canvasContext.fill()
    }
  })
}

function drawSegment(
  [firstX, firstY],
  [nextX, nextY],
  color,
  lineWidth,
  scale,
  canvasContext
) {
  canvasContext.beginPath()
  canvasContext.moveTo(firstX * scale, firstY * scale)
  canvasContext.lineTo(nextX * scale, nextY * scale)
  canvasContext.lineWidth = lineWidth
  canvasContext.strokeStyle = color
  canvasContext.stroke()
}

export function drawSkeleton(
  keypoints,
  minConfidence,
  color,
  lineWidth,
  canvasContext,
  scale = 1
) {
  const adjacentKeyPoints = posenet.getAdjacentKeyPoints(
    keypoints,
    minConfidence
  )

  adjacentKeyPoints.forEach(keypoints => {
    drawSegment(
      toTuple(keypoints[0].position),
      toTuple(keypoints[1].position),
      color,
      lineWidth,
      scale,
      canvasContext
    )
  })
}


