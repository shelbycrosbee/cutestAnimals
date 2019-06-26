
export function wholesomeize() {
  return async function (dispatch) {
    dispatch({
      type: 'wholesomeize',
      data: {
        string: 'clouds'
      }
    })
  }
}