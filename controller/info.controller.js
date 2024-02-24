import https from 'https'

class InfoController {
    async getCities( req, res ) {
        console.log( req.headers )
    
        try {
    
            var postData = JSON.stringify(req.body)
        
            var options = {
            hostname: 'hackaton.donorsearch.org',
            port: 443,
            path: '/api/cities/?page=1&page_size=5/',
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

      async getStationById( req, res ) {
        console.log( req.query.id )
    
        try {
    
            var postData = JSON.stringify(req.body)
        
            var options = {
            hostname: 'hackaton.donorsearch.org',
            port: 443,
            path: `/api/blood_stations/${req.query.id}/`,
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

      async getBloodStationsByCity( req, res ) {
        console.log( req.query.city_id )
    
        try {
    
            var postData = JSON.stringify(req.body)
        
            var options = {
            hostname: 'hackaton.donorsearch.org',
            port: 443,
            path: `/api/blood_stations/?city_id=${+req.query.cityId}`,
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

      async getAddressNeeds( req, res ) {
        console.log( req.query.id )
    
        try {
    
            var postData = JSON.stringify(req.body)
        
            var options = {
            hostname: 'hackaton.donorsearch.org',
            port: 443,
            path: `/api/address_needs/`,
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

      async getBonuses( req, res ) {
        console.log( req.query.id )
    
        try {
    
            var postData = JSON.stringify(req.body)
        
            var options = {
            hostname: 'hackaton.donorsearch.org',
            port: 443,
            path: `/api/bonuses/`,
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

      async getBonusById( req, res ) {
        console.log( req.query.id )
    
        try {
    
            var postData = JSON.stringify(req.body)
        
            var options = {
            hostname: 'hackaton.donorsearch.org',
            port: 443,
            path: `/api/bonuses/${req.query.id}`,
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

export default new InfoController()