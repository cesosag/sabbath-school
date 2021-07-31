export const transformLessonData = ({lesson, days}) => {
	const transformedData = {...lesson, days}
	return transformedData
}

export const transformQuarterlyData = ({quarterly, lessons}) => {
  const transformedData = {...quarterly, lessons}
  return transformedData
}
