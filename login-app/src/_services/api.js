 import React from 'react';
 class ApiCalls {

    static postApi(apiUrl,params){
        const response =  fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify(params)
        }).then(response => response.json());
        return response;
    }

    static getApi(apiUrl,token){
        const response =  fetch(apiUrl, {
            method: 'GET',
            headers: { 
                'Authorization': 'Bearer '+ token
             }
        }).then(response => response.json());
        return response;
    }
}

export default ApiCalls