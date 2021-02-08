export const success =(req,res,code,data) => {
  const statusCode = code || 200
  return res.status(statusCode).send({data:data})
}
export const error =(req,res,code,data) => {
  const statusCode = code || 500
  return res.status(statusCode).send({data:data})
}