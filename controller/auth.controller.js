import https from 'https'

class AuthController {
  async regUser( req, res ) {
    try {

      var postData = JSON.stringify(req.body)
    
      var options = {
        hostname: 'hackaton.donorsearch.org',
        port: 443,
        path: '/api/auth/registration/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
          }
      };
      
      var answer = await new Promise( ( resolve ) => {
        const apiReq = https.request(options, (res) => {
        
          const body = []
  
          res.on('data', (chunk) => body.push(chunk))
          res.on('end', () => {
            const resString = Buffer.concat(body).toString()
            console.log( 'resheaders: ', res.headers )
            resolve(resString)
          })
        })
        apiReq.on('error', (e) => {
          console.error(e);
        });

        apiReq.write(postData);
        apiReq.end();
      })

      console.log( 'answer: ', answer )

      // const post = await characterService.create( req.body )
      res.status( 201 ).json( JSON.parse( answer ) )
    } catch ( e ) {
      res.status( 500 ).json( e )
    }
  }

  async confirmEmailReg( req, res ) {
    try {

      var postData = JSON.stringify(req.body)
    
      var options = {
        hostname: 'hackaton.donorsearch.org',
        port: 443,
        path: '/api/auth/confirm_email_reg/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
          }
      };
      
      var answer = await new Promise( ( resolve ) => {
        const apiReq = https.request(options, (res) => {
        
          const body = []
  
          res.on('data', (chunk) => body.push(chunk))
          res.on('end', () => {
            const resString = Buffer.concat(body).toString()
            console.log( 'resString: ', resString )
            resolve(resString)
          })
        })
        apiReq.on('error', (e) => {
          console.error(e);
        });

        apiReq.write(postData);
        apiReq.end();
      })

      console.log( 'answer: ', answer )

      // const post = await characterService.create( req.body )
      res.status( 201 ).json( JSON.parse( answer ) )
    } catch ( e ) {
      res.status( 500 ).json( e )
    }
  }

  async confirmPhoneReg( req, res ) {
    try {

      var postData = JSON.stringify(req.body)
    
      var options = {
        hostname: 'hackaton.donorsearch.org',
        port: 443,
        path: '/api/auth/confirm_phone_reg/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
          }
      };
      
      var answer = await new Promise( ( resolve ) => {
        const apiReq = https.request(options, (res) => {
        
          const body = []
  
          res.on('data', (chunk) => body.push(chunk))
          res.on('end', () => {
            const resString = Buffer.concat(body).toString()
            console.log( 'resString: ', resString )
            resolve(resString)
          })
        })
        apiReq.on('error', (e) => {
          console.error(e);
        });

        apiReq.write(postData);
        apiReq.end();
      })

      console.log( 'answer: ', answer )

      // const post = await characterService.create( req.body )
      res.status( 201 ).json( JSON.parse( answer ) )
    } catch ( e ) {
      res.status( 500 ).json( e )
    }
  }

  async loginUser( req, res ) {
    try {

      var postData = JSON.stringify(req.body)
    
      var options = {
        hostname: 'hackaton.donorsearch.org',
        port: 443,
        path: '/api/auth/login/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
          }
      };
      
      var answer = await new Promise( ( resolve ) => {
        const apiReq = https.request(options, (res) => {
        
          const body = []
  
          res.on('data', (chunk) => body.push(chunk))
          res.on('end', () => {

            const resString = Buffer.concat(body).toString()
            console.log( 'resheaders: ', res.headers.token )
            console.log( 'resheaders: ', res.headers.setCookie[1] )

            resolve(resString)
          })
        })
        apiReq.on('error', (e) => {
          console.error(e);
        });

        apiReq.write(postData);
        apiReq.end();
      })


      // const post = await characterService.create( req.body )
      res.status( 201 ).json( JSON.parse( answer ) )
    } catch ( e ) {
      res.status( 500 ).json( e )
    }
  }

  async logoutUser( req, res ) {
    try {

      var postData = JSON.stringify(req.body)
    
      var options = {
        hostname: 'hackaton.donorsearch.org',
        port: 443,
        path: '/api/auth/logout/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length,
            'Authorization': 'Token 1edf1c4c1b256c01a0c43b80265bd7be1641f270'
          }
      };
      
      var answer = await new Promise( ( resolve ) => {
        const apiReq = https.request(options, (res) => {
        
          const body = []
  
          res.on('data', (chunk) => body.push(chunk))
          res.on('end', () => {
            const resString = Buffer.concat(body).toString()
            console.log( 'resString: ', resString )
            resolve(resString)
          })
        })
        apiReq.on('error', (e) => {
          console.error(e);
        });

        apiReq.write(postData);
        apiReq.end();
      })

      console.log( 'answer: ', answer )

      // const post = await characterService.create( req.body )
      res.status( 201 ).json( JSON.parse( answer ) )
    } catch ( e ) {
      res.status( 500 ).json( e )
    }
  }

  async accRecovery( req, res ) {
    try {

      var postData = JSON.stringify(req.body)
    
      var options = {
        hostname: 'hackaton.donorsearch.org',
        port: 443,
        path: '/api/auth/recover/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
          }
      };
      
      var answer = await new Promise( ( resolve ) => {
        const apiReq = https.request(options, (res) => {
        
          const body = []
  
          res.on('data', (chunk) => body.push(chunk))
          res.on('end', () => {
            const resString = Buffer.concat(body).toString()
            console.log( 'resString: ', resString )
            resolve(resString)
          })
        })
        apiReq.on('error', (e) => {
          console.error(e);
        });

        apiReq.write(postData);
        apiReq.end();
      })

      console.log( 'answer: ', answer )

      // const post = await characterService.create( req.body )
      res.status( 201 ).json( JSON.parse( answer ) )
    } catch ( e ) {
      res.status( 500 ).json( e )
    }
  }

  async resendSMSCode( req, res ) {
    try {

      var postData = JSON.stringify(req.body)
    
      var options = {
        hostname: 'hackaton.donorsearch.org',
        port: 443,
        path: '/api/auth/resend_code/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
          }
      };
      
      var answer = await new Promise( ( resolve ) => {
        const apiReq = https.request(options, (res) => {
        
          const body = []
  
          res.on('data', (chunk) => body.push(chunk))
          res.on('end', () => {
            const resString = Buffer.concat(body).toString()
            console.log( 'resString: ', resString )
            resolve(resString)
          })
        })
        apiReq.on('error', (e) => {
          console.error(e);
        });

        apiReq.write(postData);
        apiReq.end();
      })

      console.log( 'answer: ', answer )

      // const post = await characterService.create( req.body )
      res.status( 201 ).json( JSON.parse( answer ) )
    } catch ( e ) {
      res.status( 500 ).json( e )
    }
  }

  async checkSMSCode( req, res ) {
    try {

      var postData = JSON.stringify(req.body)
    
      var options = {
        hostname: 'hackaton.donorsearch.org',
        port: 443,
        path: '/api/auth/check_sms_code/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
          }
      };
      
      var answer = await new Promise( ( resolve ) => {
        const apiReq = https.request(options, (res) => {
        
          const body = []
  
          res.on('data', (chunk) => body.push(chunk))
          res.on('end', () => {
            const resString = Buffer.concat(body).toString()
            console.log( 'resString: ', resString )
            resolve(resString)
          })
        })
        apiReq.on('error', (e) => {
          console.error(e);
        });

        apiReq.write(postData);
        apiReq.end();
      })

      console.log( 'answer: ', answer )

      // const post = await characterService.create( req.body )
      res.status( 201 ).json( JSON.parse( answer ) )
    } catch ( e ) {
      res.status( 500 ).json( e )
    }
  }

  async resendEmailCode( req, res ) {
    try {

      var postData = JSON.stringify(req.body)
    
      var options = {
        hostname: 'hackaton.donorsearch.org',
        port: 443,
        path: '/api/auth/resend_email_code/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
          }
      };
      
      var answer = await new Promise( ( resolve ) => {
        const apiReq = https.request(options, (res) => {
        
          const body = []
  
          res.on('data', (chunk) => body.push(chunk))
          res.on('end', () => {
            const resString = Buffer.concat(body).toString()
            console.log( 'resString: ', resString )
            resolve(resString)
          })
        })
        apiReq.on('error', (e) => {
          console.error(e);
        });

        apiReq.write(postData);
        apiReq.end();
      })

      console.log( 'answer: ', answer )

      // const post = await characterService.create( req.body )
      res.status( 201 ).json( JSON.parse( answer ) )
    } catch ( e ) {
      res.status( 500 ).json( e )
    }
  }

  async setPassword( req, res ) {
    try {

      var postData = JSON.stringify(req.body)
    
      var options = {
        hostname: 'hackaton.donorsearch.org',
        port: 443,
        path: '/api/auth/set_password/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
          }
      };
      
      var answer = await new Promise( ( resolve ) => {
        const apiReq = https.request(options, (res) => {
        
          const body = []
  
          res.on('data', (chunk) => body.push(chunk))
          res.on('end', () => {
            const resString = Buffer.concat(body).toString()
            console.log( 'resString: ', resString )
            resolve(resString)
          })
        })
        apiReq.on('error', (e) => {
          console.error(e);
        });

        apiReq.write(postData);
        apiReq.end();
      })

      console.log( 'answer: ', answer )

      // const post = await characterService.create( req.body )
      res.status( 201 ).json( JSON.parse( answer ) )
    } catch ( e ) {
      res.status( 500 ).json( e )
    }
  }

  async changeEmail( req, res ) {
    try {

      var postData = JSON.stringify(req.body)
    
      var options = {
        hostname: 'hackaton.donorsearch.org',
        port: 443,
        path: '/api/auth/change_email/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
          }
      };
      
      var answer = await new Promise( ( resolve ) => {
        const apiReq = https.request(options, (res) => {
        
          const body = []
  
          res.on('data', (chunk) => body.push(chunk))
          res.on('end', () => {
            const resString = Buffer.concat(body).toString()
            console.log( 'resString: ', resString )
            resolve(resString)
          })
        })
        apiReq.on('error', (e) => {
          console.error(e);
        });

        apiReq.write(postData);
        apiReq.end();
      })

      console.log( 'answer: ', answer )

      // const post = await characterService.create( req.body )
      res.status( 201 ).json( JSON.parse( answer ) )
    } catch ( e ) {
      res.status( 500 ).json( e )
    }
  }

  async changePassword( req, res ) {
    try {

      var postData = JSON.stringify(req.body)
    
      var options = {
        hostname: 'hackaton.donorsearch.org',
        port: 443,
        path: '/api/auth/change_password/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
          }
      };
      
      var answer = await new Promise( ( resolve ) => {
        const apiReq = https.request(options, (res) => {
        
          const body = []
  
          res.on('data', (chunk) => body.push(chunk))
          res.on('end', () => {
            const resString = Buffer.concat(body).toString()
            console.log( 'resString: ', resString )
            resolve(resString)
          })
        })
        apiReq.on('error', (e) => {
          console.error(e);
        });

        apiReq.write(postData);
        apiReq.end();
      })

      console.log( 'answer: ', answer )

      // const post = await characterService.create( req.body )
      res.status( 201 ).json( JSON.parse( answer ) )
    } catch ( e ) {
      res.status( 500 ).json( e )
    }
  }

  async changePhone( req, res ) {
    try {

      var postData = JSON.stringify(req.body)
    
      var options = {
        hostname: 'hackaton.donorsearch.org',
        port: 443,
        path: '/api/auth/change_phone/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
          }
      };
      
      var answer = await new Promise( ( resolve ) => {
        const apiReq = https.request(options, (res) => {
        
          const body = []
  
          res.on('data', (chunk) => body.push(chunk))
          res.on('end', () => {
            const resString = Buffer.concat(body).toString()
            console.log( 'resString: ', resString )
            resolve(resString)
          })
        })
        apiReq.on('error', (e) => {
          console.error(e);
        });

        apiReq.write(postData);
        apiReq.end();
      })

      console.log( 'answer: ', answer )

      // const post = await characterService.create( req.body )
      res.status( 201 ).json( JSON.parse( answer ) )
    } catch ( e ) {
      res.status( 500 ).json( e )
    }
  }

  async confirmEmail( req, res ) {
    try {

      var postData = JSON.stringify(req.body)
    
      var options = {
        hostname: 'hackaton.donorsearch.org',
        port: 443,
        path: '/api/auth/confirm_email/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
          }
      };
      
      var answer = await new Promise( ( resolve ) => {
        const apiReq = https.request(options, (res) => {
        
          const body = []
  
          res.on('data', (chunk) => body.push(chunk))
          res.on('end', () => {
            const resString = Buffer.concat(body).toString()
            console.log( 'resString: ', resString )
            resolve(resString)
          })
        })
        apiReq.on('error', (e) => {
          console.error(e);
        });

        apiReq.write(postData);
        apiReq.end();
      })

      console.log( 'answer: ', answer )

      // const post = await characterService.create( req.body )
      res.status( 201 ).json( JSON.parse( answer ) )
    } catch ( e ) {
      res.status( 500 ).json( e )
    }
  }

  async confirmPhone( req, res ) {
    try {

      var postData = JSON.stringify(req.body)
    
      var options = {
        hostname: 'hackaton.donorsearch.org',
        port: 443,
        path: '/api/auth/confirm_phone/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length
          }
      };
      
      var answer = await new Promise( ( resolve ) => {
        const apiReq = https.request(options, (res) => {
        
          const body = []
  
          res.on('data', (chunk) => body.push(chunk))
          res.on('end', () => {
            const resString = Buffer.concat(body).toString()
            console.log( 'resString: ', resString )
            resolve(resString)
          })
        })
        apiReq.on('error', (e) => {
          console.error(e);
        });

        apiReq.write(postData);
        apiReq.end();
      })

      console.log( 'answer: ', answer )

      // const post = await characterService.create( req.body )
      res.status( 201 ).json( JSON.parse( answer ) )
    } catch ( e ) {
      res.status( 500 ).json( e )
    }
  }
}

export default new AuthController()
