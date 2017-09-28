class Passenger {
  constructor(seatNumber, name, lastname, id) {
    this.seatNumber = seatNumber;
    this.name = name;
    this.lastname = lastname;
    this.id = id;
  }

  toHTML() {
    return (<article className="ticket">
      <section className="date-ticket">
        <time datetime="27th sept">
          <span>27</span><span>Sept</span>
        </time>
      </section>
      <section className="ticket-cont">
        <small>small airline</small>
        <h3 id="place_namePassenger">{this.name}  {this.lastname}</h3>
        <p>DNI {this.id}</p>
        <div className="even-date">
          <i className="fa fa-calendar"></i>
          <time>
            <p>friday 29 september 2017 &nbsp;&nbsp;</p>
            <p>9 am</p>
          </time>
        </div>
        <div className="even-info">
          <i className="fa fa-map-marker"></i>
          <p>Jorge Chavez International Airport, LIMA</p>
          <p>GATE 8 </p>
          <p>SEAT  {this.seatNumber}</p>
        </div>
      </section>
    </article>);
  }
}

let seats = [];

seats[0] = new Passenger(1, 'Melina', 'Martinez', 12345678);
seats[2] = new Passenger(3, 'Martin', 'Loza', 75595665);
seats[4] = new Passenger(5, 'Milagros', 'Rodriguez', 12395747);
seats[5] = new Passenger(6, 'Rishabh', 'Jain', 72852147);
seats[8] = new Passenger(9, 'Gabriela', 'Rodriguez', 52545747);


function showList(array) {
  return array.map(a => a.toHTML());
}

const App = props => {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><img className="logo_img" src="assets/img/logo1.png" alt=""/></a>
			    </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#" id="btn_book">Book your flight<span className="sr-only">(current)</span></a></li>
              <li><a href="#">Cancel Flight</a></li>
              <li><a href="#" id="btnShow">Passenger List</a></li>
            </ul>
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" name="dniSearch" id="dniSearch" className="form-control" placeholder="ID Search" size="8" maxlength="8"/>
					    </div>
              <button type="submit" className="btn btn-default" id="btnSearch">Submit</button>
				    </form>
              <ul class="nav navbar-nav navbar-right">
                 <li><a href="#"><button type="submit" className="btn btn-default">Sign In</button></a></li>
              </ul>
			    </div>
        </div>
	    </nav>

      <section id="progress bar" className="progress_bar">
        <ul className="progress">
          <li id="select" className="complete">Flight Details</li>
          <li id="upgrade">Passenger Information</li>
          <li id="payment">Make Payment</li>
          <li id="finish">Complete Booking</li>
        </ul>
      </section>

      <section className="header">
        <h1 align="center">Flight Booking</h1>
      </section>

      <section id="flight_details">
        <div className="container">
          <div className="well clearfix">
            <fieldset className="well well-form">
              <legend className="well-legend">Booking Details</legend>
              <div className="row">
                <div className="col-xs-2">
                  <label className="control-label" for="booking-id">ID</label>
                  <input className="form-control input-flight" type="text" name="booking-id" id="booking-id" placeholder="ID Booking" readonly />
                </div>

                <div className="col-xs-4">
                  <label className="control-label" for="booking-date">Booking Date</label>
                  <div className="form-group input-group">
                    <span className="input-group-addon "><i className="fa fa-calendar"></i></span>
                    <input className="form-control input-flight" type="text" name="booking-date" id="booking-date" placeholder="Booking Date" />
                  </div>
                </div>
                <div className="col-xs-4">
                  <label className="control-label" for="booking-date">Destination</label>
                  <div className="form-group input-group">
                    <span className="input-group-addon "><i className="fa fa-map-o" aria-hidden="true"></i></span>
                    <input className="form-control input-flight" type="text" name="booking-date" id="booking-date" placeholder="Destination" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-2">
                  <label className="control-label" for="form_days">Adults</label>
                  <select className="form-control" id="form_days" name="days">
                    <option selected value="1">1</option>
								    <option value="2">2</option>
								    <option value="3">3</option>
								    <option value="4">4</option>
							    </select>
                </div>

                <div className="col-xs-2">
                  <label className="control-label" for="form_days">Children</label>
                  <select className="form-control" id="form_days" name="days">
                    <option selected value="1">0</option>
								    <option value="2">1</option>
								    <option value="3">2</option>
								    <option value="4">3</option>
							    </select>
                </div>

                <div className="col-xs-2 col-md-offset-5">
                  <label className="control-label" for="btn_next"> </label>
                  <button className="btn" id="btn_next">NEXT</button>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </section>

      <section id="passenger_info" hidden>
        <div className="container">
          <div className="well clearfix">
            <fieldset className="well well-form">
              <legend className="well-legend">Passenger Information</legend>
                <div className="row">
                  <div className="col-xs-5">
                    <label className="control-label" for="name">Name</label>
                    <div className="form-group input-group">
                      <span className="input-group-addon primary"><i class="fa fa-user-o" aria-hidden="true"></i></span>
                      <input className="form-control" type="text" name="name" id="name" placeholder="Name" required />
                    </div>
                    <label className="control-label" for="lastName">Last name</label>
                    <div className="form-group input-group">
                      <span className="input-group-addon primary"><i className="fa fa-user-o" aria-hidden="true"></i></span>
                      <input type="text" class="form-control" name="lastname" id="lastname" placeholder="Last Name" required/>
							      </div>
                    <label className="control-label" for="dni">ID Number</label>
                    <div className="form-group input-group">
                      <span className="input-group-addon primary"><i className="fa fa-id-card-o"></i></span>
                      <input type="text" className="form-control" name="dni" id="dni" placeholder="ID Number" maxlength="8" minlength="8" required/>
							      </div>
                  </div>

                  <div className="col-xs-7">
                    <label className="control-label">Choose your seat</label>
                    <div id="showPlace" align="center">Select place</div><br/>
                    <table id="spot" align="center" border="1px">
                      <tr>
                        <td>01</td>
                        <td>03</td>
                        <td>05</td>
                        <td>07</td>
                        <td>09</td>
                      </tr>
                      <tr>
                        <td>02</td>
                        <td>04</td>
                        <td>06</td>
                        <td>08</td>
                        <td>10</td>
                      </tr>
                    </table><br/>
                    <div className="col-md-offset-10">
                      <label className="control-label" for="btnReservation"> </label>
                      <button className="btn" id="btn_pay">PAY</button>
                    </div>
						      </div>
					      </div>
				      </fieldset>
            </div>
         </div>
	    </section>

      <section id="payment_details" hidden>
        <div className="payment">
          <div id="card-container">
            <div className="card" id="card">
              <div className="front">
                <img className="chip img_card" src="https://www.bethpagefcu.com/~/media/Images/bethpage/Page-Content/CC_chip.ashx?la=en"/>
                <img className="payment-card img_card" id="mastercard" src="http://www.veryicon.com/icon/png/Business/Free%20Ecommerce/mastercard.png"/>
                <img className="payment-card img_card" id="visa" src="http://www.veryicon.com/icon/png/Business/Free%20Ecommerce/visa.png"/>
                <span className="payment-title span_card">Payment Details</span>
                <form>
                  <input className="field" id="number_card" placeholder="card number" />
                  <input className="field" id="name_card" placeholder="name" />
                  <input className="field" id="date_card" placeholder="expiry" />
                </form>
					    </div>
				    </div>	
          </div>
          <div>
            <label className="control-label" for="btnReservation"> </label>
            <button className="btn" id="btnReservation">BOOK</button>
          </div>
        </div>
	    </section>

      <section id="ticket">
        <section className="container-ticket">
          <div className="row-ticket">
            {showList(props.items)}
          </div>
        </section>
      </section>

    </div>
  );
}


ReactDOM.render(
  <App items = {seats} />, 
  document.getElementById('root'));