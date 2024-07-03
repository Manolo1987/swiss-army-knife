let buchstaben = 'abcdefghijklmnopqrstuvwxyz';
			let sonderzeichen = '|<>#+*~-_!?§$%&/()=@';
			let nummern = '0123456789';
            let everything = [...buchstaben, ...buchstaben.toUpperCase(),...sonderzeichen, ...nummern]

            console.log(everything);
            console.log(everything[4]);