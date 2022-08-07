//this is reducer function which will take state and action to be performed. if state not passed then default value =0.
function amountReducer(state=0,action){
    if(action.type === 'deposit')
    {
        return state + action.payload
    }
    else if(action.type === 'withdraw')
    {
        return state - action.payload
    }
    else
    {
        state
    }
}