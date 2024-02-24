import https from 'https'

class DonationController {
    
    async createDonation( req, res ) {
        try {
    
          var postData = JSON.stringify(req.body)
        
          var options = {
            hostname: 'hackaton.donorsearch.org',
            port: 443,
            path: '/api/donations/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length,
                'Authorization': 'Token ' + req.headers.cookie.slice( 6 )
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

    async postPicture( req, res ) {
        try {
    
          var postData = JSON.stringify(req.body)
        
          var options = {
            hostname: 'hackaton.donorsearch.org',
            port: 443,
            path: '/api/picture/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': postData.length,
                'Authorization': 'Token ' + req.headers.cookie.slice( 6 )
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

    async getDonations( req, res ) {
      console.log( req.headers )

      try {

          var postData = JSON.stringify(req.body)
      
          var options = {
          hostname: 'hackaton.donorsearch.org',
          port: 443,
          path: '/api/donations/',
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Content-Length': postData.length,
              'Authorization': 'Token ' + req.headers.cookie.slice( 6 )
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

          res.status( 201 ).json( JSON.parse( answer ) )
      } catch ( e ) {
          res.status( 500 ).json( e )
      }
  }

  async getDonationById( req, res ) {
    console.log( req.headers )

    try {

        var postData = JSON.stringify(req.body)
    
        var options = {
        hostname: 'hackaton.donorsearch.org',
        port: 443,
        path: '/api/donations/{id}/',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length,
            'Authorization': 'Token ' + req.headers.cookie.slice( 6 )
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

        res.status( 201 ).json( JSON.parse( answer ) )
    } catch ( e ) {
        res.status( 500 ).json( e )
    }
  }

  async updateDonation( req, res ) {
    console.log( req.headers )

    try {

        var postData = JSON.stringify(req.body)
    
        var options = {
        hostname: 'hackaton.donorsearch.org',
        port: 443,
        path: '/api/donations/{id}/',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length,
            'Authorization': 'Token ' + req.headers.cookie.slice( 6 )
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

        res.status( 201 ).json( JSON.parse( answer ) )
    } catch ( e ) {
        res.status( 500 ).json( e )
    }
  }

  async patchDonation( req, res ) {
    console.log( req.headers )

    try {

        var postData = JSON.stringify(req.body)
    
        var options = {
        hostname: 'hackaton.donorsearch.org',
        port: 443,
        path: '/api/donations/{id}/',
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length,
            'Authorization': 'Token ' + req.headers.cookie.slice( 6 )
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

        res.status( 201 ).json( JSON.parse( answer ) )
    } catch ( e ) {
        res.status( 500 ).json( e )
    }
  }

  async deleteDonation( req, res ) {
    console.log( req.headers )

    try {

        var postData = JSON.stringify(req.body)
    
        var options = {
        hostname: 'hackaton.donorsearch.org',
        port: 443,
        path: '/api/donations/{id}/',
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length,
            'Authorization': 'Token ' + req.headers.cookie.slice( 6 )
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

        res.status( 201 ).json( JSON.parse( answer ) )
    } catch ( e ) {
        res.status( 500 ).json( e )
    }
  }

  async isExists( req, res ) {
    console.log( req.headers )

    try {

        var postData = JSON.stringify(req.body)
    
        var options = {
        hostname: 'hackaton.donorsearch.org',
        port: 443,
        path: '/api/donations/is-exists/',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': postData.length,
            'Authorization': 'Token ' + req.headers.cookie.slice( 6 )
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

        res.status( 201 ).json( JSON.parse( answer ) )
    } catch ( e ) {
        res.status( 500 ).json( e )
    }
  }
}

export default new DonationController()