function depositMoney(amount)
{
    return(dispatch) => {
       dispatch({
            type:'deposit',
            payload: amount
       })
    }
}

function withdrawMoney(amount)
{
    return(dispatch) => {
        dispatch({
             type:'withdraw',
             payload: amount
        })
     }
}

export { depositMoney, withdrawMoney }