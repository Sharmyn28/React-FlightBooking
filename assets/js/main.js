'use strict';

class Bus{
	constructor () {
		this.passenger = [];
		this.seat = undefined;
	}
	
	redirect(event){
		let place = event.target.textContent;
		this.seat = parseInt(place);
		$('#showPlace').html("You have selected the seat # " + place);
		(event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';
		return this.seat;
	}

	clean(){
		$('#name').val('');
		$('#lastname').val('');
		$('#dni').val('');
		$('#dniSearch').val('');
		$('#showPlace').html('Select place');
	}

	restart(){
		$('#upgrade').removeClass("complete");
		$('#payment').removeClass("complete");
		$('#finish').removeClass("complete");
		$('#flight_details').show();
	}

	showForm(){
		$('#flight_details').hide();
		$('#upgrade').addClass("complete");
		$('#passenger_info').removeAttr("hidden");
	}
	makeReservation(name, apellido, dni, asiento){	
		let mostrar = document.getElementById("showPlace");
		let mos = mostrar.textContent;
		let res = mos.split('You have selected the seat # ');
		let seatPlace = res[1];
	
		function Passenger(name, lastname, dni, asiento){
			this.name = $("#name").val();
			this.lastname = $("#lastname").val();
			this.dni = $("#dni").val();
			this.asiento = seatPlace;
		}
	
		let newPassenger = new Passenger(name, apellido, dni, asiento);
		this.passenger.push(newPassenger);
		console.log(newPassenger);
		$('#finish').addClass("complete");
		$('#flight_details').hide();
		$('#passenger_info').hide();
		$('#payment_details').hide();
		this.toHTML(newPassenger)
		setTimeout(()=>{ this.clean(); 
			$('#ticket').empty();
			this.clean();
			this.restart();
		}, 40000);
	}

	pay(){
		$('#payment').addClass("complete");
		$('#passenger_info').hide();
		$('#payment_details').removeAttr("hidden");
	}

	searchPassenger(){
		let dniSearch = $("#dniSearch").val();
		dniSearch = parseInt(dniSearch);
		let foundID;
		$.each(this.passenger, function (index, value) {
			if(dniSearch == parseInt(value.dni) && value != undefined){
				foundID = value;				
				$("#name").val(foundID.name);
				$("#lastname").val(foundID.lastname);
				$("#dni").val(foundID.dni);
				return true;
			}
		});
		console.log(foundID);
		setTimeout(()=>{ this.clean(); }, 3500);
	}

	toHTML(pasaj) {
		$('#ticket').append(`<article class="ticket">\
								<section class="date-ticket">\
									<time datetime="27th sept">\
										<span>27</span><span>Sept</span>\
									</time>\
								</section>\
								<section class="ticket-cont">\
									<small>small airline</small>\
									<h3 id="place_namePassenger">${pasaj.name}  ${pasaj.lastname}</h3>\
									<p>DNI ${pasaj.dni}</p>\
									<div class="even-date">\
										<i class="fa fa-calendar"></i>\
										<time>\
											<p>friday 29 september 2017 &nbsp;&nbsp;</p>\
											<p>9 am</p>\
										</time>\
									</div>\
									<div class="even-info">\
										<i class="fa fa-map-marker"></i>\
										<p>Jorge Chavez International Airport, LIMA</p>\
										<p>GATE 8 </p>\
										<p>SEAT  ${pasaj.asiento}</p>\
									</div>\
								</section>\
							</article>`);
	}

	showList(){
		$('#flight_details').hide();
		$.each(this.passenger, (index, value)=> {
			this.toHTML(value)
		});
		setTimeout(()=>{ this.clean();
			$('#ticket').empty();
			this.clean();
		}, 25000);
	}
	
	cancel(){
		this.clean();
	}

	init(){
		var spot = document.getElementsByTagName('td');
		for (var i = 0; i < spot.length; i++) {
			spot[i].addEventListener('click',this.redirect,false);
		}
		$('#btnReservation').click( () => this.makeReservation());
		$('#btnShow').click( () => this.showList());
		$('#btnSearch').click( () => this.searchPassenger());
		$('#btn_next').click( () => this.showForm());
		$('#btn_pay').click( () => this.pay());
		$('#btn_book').click( () => this.restart());
	}
}


$(document).ready(()=>{
	var app = new Bus ();
	app.init();
})
