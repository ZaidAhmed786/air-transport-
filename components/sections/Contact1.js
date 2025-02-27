import React, { useState } from "react";

const Contact1 = () => {
  const [numberOfPackages, setNumberOfPackages] = useState(0);
  const [packages, setPackages] = useState([]);
  const [typeOfLocation, setTypeOfLocation] = useState("Select Location");
  const [singleDestination, setSingleDestination] = useState(false); // State for single destination toggle
  const [destination, setDestination] = useState(""); // State for single destination value

  const [shippingTo, setShippingTo] = useState({
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "select Country",
  });

  const [shippingFrom, setShippingFrom] = useState({
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "select Country",
  });

  const [deliveryOptions, setDeliveryOptions] = useState({
    deliverySpeed: "3-Day",
    pickupFromAirport: false,
    deliverToDoor: false,
    additionalNotes: "",
  });

  // Handle package changes
  const handlePackageChange = (index, field, value) => {
    const newPackages = [...packages];
    newPackages[index][field] = value;
    setPackages(newPackages);
  };

  // Handle number of packages change
  const handleNumberOfPackagesChange = (e) => {
    const num = parseInt(e.target.value);
    setNumberOfPackages(num);
    if (num > packages.length) {
      const newPackages = [...packages];
      for (let i = packages.length; i < num; i++) {
        newPackages.push({
          length: "",
          width: "",
          height: "",
          weight: "",
          destination: "",
        });
      }
      setPackages(newPackages);
    } else if (num < packages.length) {
      setPackages(packages.slice(0, num));
    }
  };

  // Handle shipping to changes
  const handleShippingToChange = (field, value) => {
    setShippingTo({ ...shippingTo, [field]: value });
  };

  // Handle shipping from changes
  const handleShippingFromChange = (field, value) => {
    setShippingFrom({ ...shippingFrom, [field]: value });
  };

  // Handle delivery options changes
  const handleDeliveryOptionsChange = (field, value) => {
    setDeliveryOptions({ ...deliveryOptions, [field]: value });
  };

  // Calculate total points
  const calculatePoints = () => {
    if (numberOfPackages === 0) return 0;
    if (numberOfPackages === 1) return 3;
    return 3 + (numberOfPackages - 1) * 2;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      numberOfPackages,
      packages,
      singleDestination,
      destination,
      shippingTo,
      shippingFrom,
      deliveryOptions,
      typeOfLocation,
    };
    console.log("Form Data:", formData);
  };

  return (
    <>
      <section className="contact-section p-0">
        <div className="icon-container"></div>
        <div className="auto-container">
          <div className="outer-box">
            <div className="row g-0">
              <div className="content-column col-lg-12 col-md-12 col-sm-12 order-lg-2 wow fadeInRight">
                <div className="inner-column">
                  <div className="icon-arrow"></div>
                  <div className="sec-title">
                    <span className="sub-title">Reach Us Now</span>
                    <h2 className="scrub-each-word text-split">
                      Take full control on shipping
                    </h2>
                    <div className="text">
                      Need to get in touch? We’d love to hear from you. Whether
                      you have questions, need a quote, or are ready to schedule
                      a shipment, our team is ready to help you. Reach out to us
                      and experience hassle-free logistics today!
                    </div>
                  </div>
                  <div className="row">
                    <div className="feature-block-two col-lg-4 col-md-4 col-sm-4">
                      <div className="inner-box">
                        <i className="icon fa fa-check"></i>
                        <div className="content">
                          <h5 className="title">
                            Tracking <br />
                            made easy
                          </h5>
                        </div>
                      </div>
                    </div>

                    <div className="feature-block-two col-lg-4 col-md-4 col-sm-4">
                      <div className="inner-box">
                        <i className="icon fa fa-check"></i>
                        <div className="content">
                          <h5 className="title">
                            Multiple <br /> warehouses
                          </h5>
                        </div>
                      </div>
                    </div>

                    <div className="feature-block-two col-lg-4 col-md-4 col-sm-4">
                      <div className="inner-box">
                        <i className="icon fa fa-check"></i>
                        <div className="content">
                          <h5 className="title">
                            Quick <br />
                            fast process
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="form-column col-lg-12 col-md-12 col-sm-12 wow fadeInLeft"
                data-wow-delay="300ms"
              >
                <div className="inner-column">
                  <div className="contact-form">
                    <form
                      method="post"
                      onSubmit={handleSubmit}
                      id="contact-form"
                    >
                      <div className="row">
                        <div className="form-group col-lg-6 col-md-12">
                          <label>Profix</label>
                          <select className="custom-select">
                            <option value="Mr.">Mr.</option>
                            <option value="Mrs.">Mrs.</option>
                            <option value="Ms.">Ms.</option>
                          </select>
                        </div>

                        <div className="form-group col-lg-6 col-md-6">
                          <label>First Name:</label>
                          <input type="text" name="firstName" required />
                        </div>

                        <div className="form-group col-lg-6 col-md-6">
                          <label>Middle Name:</label>
                          <input type="text" name="middleName" />
                        </div>

                        <div className="form-group col-lg-6 col-md-6">
                          <label>Last Name:</label>
                          <input type="text" name="lastName" required />
                        </div>

                        <div className="form-group col-lg-6 col-md-6">
                          <label>Phone Number:</label>
                          <input type="tel" name="phone" required />
                        </div>

                        <div className="form-group col-lg-6 col-md-12">
                          <label>Email Address:</label>
                          <input type="email" name="email" required />
                        </div>

                        <div className="form-group col-lg-12 col-md-12">
                          <label>
                            Number of Packages: Total Points:{" "}
                            {calculatePoints()}
                          </label>
                          <input
                            type="number"
                            name="numberOfPackages"
                            value={numberOfPackages}
                            onChange={handleNumberOfPackagesChange}
                            min="0"
                          />
                          {/* <p></p> */}
                        </div>

                        {/* Single Destination Checkbox */}
                        <div className="form-group col-lg-12 col-md-12"></div>
                        {/* 
                        {singleDestination && (
                          <div className="form-group col-lg-12 col-md-12">
                            <label>Destination:</label>
                            <input
                              type="text"
                              value={destination}
                              onChange={(e) => setDestination(e.target.value)}
                            />
                          </div>
                        )} */}
                        <label style={{ display: "flex", gap: "10px" }}>
                          <input
                            style={{ width: "20px", height: "auto" }}
                            type="checkbox"
                            checked={singleDestination}
                            onChange={(e) =>
                              setSingleDestination(e.target.checked)
                            }
                          />
                          Use Single Destination for All Packages
                        </label>
                        {/* Package Fields */}
                        {packages.map((pkg, index) => (
                          <div key={index} className="form-group row">
                            <label>Package {index + 1} </label>

                            <div className="col-md-3 col-sm-12">
                              <input
                                type="number"
                                placeholder="Length (inches)"
                                value={pkg.length}
                                onChange={(e) =>
                                  handlePackageChange(
                                    index,
                                    "length",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-md-3 col-sm-12">
                              <input
                                type="number"
                                placeholder="Width (inches)"
                                value={pkg.width}
                                onChange={(e) =>
                                  handlePackageChange(
                                    index,
                                    "width",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-md-3 col-sm-12">
                              <input
                                type="number"
                                placeholder="Height (inches)"
                                value={pkg.height}
                                onChange={(e) =>
                                  handlePackageChange(
                                    index,
                                    "height",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            <div className="col-md-3 col-sm-12">
                              <input
                                type="number"
                                placeholder="Weight (lbs)"
                                value={pkg.weight}
                                onChange={(e) =>
                                  handlePackageChange(
                                    index,
                                    "weight",
                                    e.target.value
                                  )
                                }
                              />
                            </div>
                            {/* Destination Field for Each Package */}
                            {!singleDestination && (
                              <div className="form-group col-lg-12 col-md-12">
                                <label>
                                  Destination for Package {index + 1}:
                                </label>
                                <input
                                  type="text"
                                  value={pkg.destination || ""}
                                  onChange={(e) =>
                                    handlePackageChange(
                                      index,
                                      "destination",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            )}
                          </div>
                        ))}

                        {/* Shipping From Fields */}
                        <div className="form-group col-lg-12 col-md-6">
                          <label>Shipping from</label>
                          <input
                            type="text"
                            name="shippingFromAddress"
                            value={shippingFrom.address}
                            onChange={(e) =>
                              handleShippingFromChange(
                                "address",
                                e.target.value
                              )
                            }
                            required
                          />
                        </div>

                        <div className="form-group col-lg-6 col-md-6">
                          <label>Apartment, suite, etc</label>
                          <input
                            type="text"
                            name="shippingFromApartment"
                            value={shippingFrom.apartment}
                            onChange={(e) =>
                              handleShippingFromChange(
                                "apartment",
                                e.target.value
                              )
                            }
                            required
                          />
                        </div>

                        <div className="form-group col-lg-6 col-md-6">
                          <label>City</label>
                          <input
                            type="text"
                            name="shippingFromCity"
                            value={shippingFrom.city}
                            onChange={(e) =>
                              handleShippingFromChange("city", e.target.value)
                            }
                            required
                          />
                        </div>

                        <div className="form-group col-lg-6 col-md-6">
                          <label>State/Province</label>
                          <input
                            type="text"
                            name="shippingFromState"
                            value={shippingFrom.state}
                            onChange={(e) =>
                              handleShippingFromChange("state", e.target.value)
                            }
                            required
                          />
                        </div>

                        <div className="form-group col-lg-6 col-md-6">
                          <label>ZIP / Postal Code</label>
                          <input
                            type="number"
                            name="shippingFromZipCode"
                            value={shippingFrom.zipCode}
                            onChange={(e) =>
                              handleShippingFromChange(
                                "zipCode",
                                e.target.value
                              )
                            }
                            required
                          />
                        </div>

                        <div className="form-group col-lg-6 col-md-12">
                          <label>Country</label>
                          <select
                            className="custom-select"
                            name="shippingFromCountry"
                            value={shippingFrom.country}
                            onChange={(e) =>
                              handleShippingFromChange(
                                "country",
                                e.target.value
                              )
                            }
                          >
                            <option value="Select Country">
                              Select Country
                            </option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Antigua and Barbuda">
                              Antigua and Barbuda
                            </option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegovina">
                              Bosnia and Herzegovina
                            </option>
                            <option value="Botswana">Botswana</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Brunei">Brunei</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cabo Verde">Cabo Verde</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Central African Republic">
                              Central African Republic
                            </option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo (Congo-Brazzaville)">
                              Congo (Congo-Brazzaville)
                            </option>
                            <option value="Congo (Congo-Kinshasa)">
                              Congo (Congo-Kinshasa)
                            </option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czechia">Czechia</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">
                              Dominican Republic
                            </option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">
                              Equatorial Guinea
                            </option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Eswatini">Eswatini</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Greece">Greece</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran">Iran</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Laos">Laos</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libya">Libya</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="North Macedonia">
                              North Macedonia
                            </option>
                            <option value="Norway">Norway</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palestine">Palestine</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Romania">Romania</option>
                            <option value="Russia">Russia</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Singapore">Singapore</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Spain">Spain</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="United States">United States</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                          </select>
                        </div>

                        <div className="form-group col-lg-12 col-md-6">
                          <label>Shipping to</label>
                          <input
                            type="text"
                            name="shippingToAddress"
                            value={shippingTo.address}
                            onChange={(e) =>
                              handleShippingToChange("address", e.target.value)
                            }
                            required
                          />
                        </div>

                        <div className="form-group col-lg-6 col-md-6">
                          <label>Apartment, suite, etc</label>
                          <input
                            type="text"
                            name="shippingToApartment"
                            value={shippingTo.apartment}
                            onChange={(e) =>
                              handleShippingToChange(
                                "apartment",
                                e.target.value
                              )
                            }
                            required
                          />
                        </div>

                        <div className="form-group col-lg-6 col-md-6">
                          <label>City</label>
                          <input
                            type="text"
                            name="shippingToCity"
                            value={shippingTo.city}
                            onChange={(e) =>
                              handleShippingToChange("city", e.target.value)
                            }
                            required
                          />
                        </div>

                        <div className="form-group col-lg-6 col-md-6">
                          <label>State/Province</label>
                          <input
                            type="text"
                            name="shippingToState"
                            value={shippingTo.state}
                            onChange={(e) =>
                              handleShippingToChange("state", e.target.value)
                            }
                            required
                          />
                        </div>

                        <div className="form-group col-lg-6 col-md-6">
                          <label>ZIP / Postal Code</label>
                          <input
                            type="number"
                            name="shippingToZipCode"
                            value={shippingTo.zipCode}
                            onChange={(e) =>
                              handleShippingToChange("zipCode", e.target.value)
                            }
                            required
                          />
                        </div>

                        <div className="form-group col-lg-6 col-md-12">
                          <label>Country</label>
                          <select
                            className="custom-select"
                            name="shippingToCountry"
                            value={shippingTo.country}
                            onChange={(e) =>
                              handleShippingToChange("country", e.target.value)
                            }
                          >
                            <option value="Select Country">
                              Select Country
                            </option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Antigua and Barbuda">
                              Antigua and Barbuda
                            </option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegovina">
                              Bosnia and Herzegovina
                            </option>
                            <option value="Botswana">Botswana</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Brunei">Brunei</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cabo Verde">Cabo Verde</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Central African Republic">
                              Central African Republic
                            </option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo (Congo-Brazzaville)">
                              Congo (Congo-Brazzaville)
                            </option>
                            <option value="Congo (Congo-Kinshasa)">
                              Congo (Congo-Kinshasa)
                            </option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czechia">Czechia</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">
                              Dominican Republic
                            </option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">
                              Equatorial Guinea
                            </option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Eswatini">Eswatini</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Greece">Greece</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran">Iran</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Laos">Laos</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libya">Libya</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="North Macedonia">
                              North Macedonia
                            </option>
                            <option value="Norway">Norway</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palestine">Palestine</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Romania">Romania</option>
                            <option value="Russia">Russia</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Singapore">Singapore</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Spain">Spain</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="United States">United States</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                          <label>Type of Location</label>
                          <select
                            className="custom-select"
                            value={typeOfLocation}
                            onChange={(e) => setTypeOfLocation(e.target.value)}
                          >
                            <option value="selectlocation">
                              Select Location
                            </option>
                            <option value="Resident/Home">Resident/Home</option>
                            <option value="Office">Office</option>
                            <option value="PO Box">PO Box</option>
                            <option value="Military">Military</option>
                            <option value="Business">Business</option>
                            <option value="Hotel">Hotel</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="form-group col-lg-6 col-md-6">
                          <label>
                            When would you like your package to be delivered?
                          </label>
                          <select
                            className="custom-select"
                            value={deliveryOptions.deliverySpeed}
                            onChange={(e) =>
                              handleDeliveryOptionsChange(
                                "deliverySpeed",
                                e.target.value
                              )
                            }
                          >
                            <option value="3-Day">3-Day</option>
                            <option value="2-Day">2-Day</option>
                            <option value="1-Day">1-Day</option>
                            <option value="Same-Day/Overnight">
                              Same-Day/Overnight (if possible)
                            </option>
                            <option value="Schedule">Schedule</option>
                          </select>
                        </div>

                        <div className="form-group col-lg-12 col-md-6">
                          <label>Delivery options</label>
                          <select
                            className="custom-select"
                            value={deliveryOptions.deliverySpeed}
                            onChange={(e) =>
                              handleDeliveryOptionsChange(
                                "deliverySpeed",
                                e.target.value
                              )
                            }
                          >
                            <option value="3-Day">
                              {" "}
                              Would you like to pick up your package from the
                              airport?
                            </option>
                            <option value="2-Day">
                              {" "}
                              To be delivered to your door with an additional
                              fee?
                            </option>
                          </select>
                        </div>

                        <div className="form-group col-lg-12">
                          <label>Additional notes</label>
                          <textarea
                            style={{ height: "150px" }}
                            value={deliveryOptions.additionalNotes}
                            onChange={(e) =>
                              handleDeliveryOptionsChange(
                                "additionalNotes",
                                e.target.value
                              )
                            }
                          />
                        </div>

                        <div className="form-group col-lg-12">
                          <button
                            type="submit"
                            className="theme-btn btn-style-one bg-dark"
                            name="submit-form"
                          >
                            <span className="btn-title">Submit request</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact1;
