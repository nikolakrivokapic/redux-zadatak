export const promiseCreator = (ajaxPromise, delay = 0) => {
    return new Promise( (accept, reject) => {
        ajaxPromise
            .done( (res) => setTimeout( () => accept(res), delay))
            .fail( (res) => {
                setTimeout( () => {
                    // ako je json response onda vrati formatiran podatak
                    if(res.responseJSON && res.responseJSON.errors) {
                        let error = res.responseJSON.errors.shift();

                        // ako postoje detalji o poljima, onda vrati formatiran podatatk
                        if(error.fields) {
                            reject( error.fields );
                        } else {
                            reject( { error: error.message } )
                        }
                    } else {
                        reject( {error: 'Unexpected error occured'} )
                    }
                }, delay)
            })
    })
}