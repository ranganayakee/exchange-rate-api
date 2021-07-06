exports.toDateFromTimestamp = (timesStamp) => {
  
  if (!timesStamp) { 
    return undefined;
  }
  const milliseconds = timesStamp * 1000;
  return new Date(milliseconds);
}