export const API_KEY = 'AIzaSyCCqb3CENVh7_DiZ0i-pEu91B95lRfCGug';


export const value_converter =(value)=>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}