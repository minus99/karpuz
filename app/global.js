import React from 'react';

module.exports = {
  token: 'ExponentPushToken[0N4qRZAzOj3ArmauEuwoYl]',
  uri: {

  },
  fetchURL: function(query, data, callback){

    fetch(query, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: data,
      })
      .then( response => response.json() )
      .then( json => { callback(json); } )
      .catch( error => callback('error', error) );
  },
};