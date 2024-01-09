import React, { useEffect, useState } from "react";
import API from "../../API/API";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { AiFillPhone, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaHubspot, FaRegAddressCard } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";


export default function Edit() {
  const { address: addressx, isConnected } = useAccount();
  const datax = useSelector(x => x)

  const [getfull_name, setgetfullname] = useState("");
  const [getemail, setgetemail] = useState("");
  const [getphone, setgetphone] = useState("");
  const [getaddress, setgetAddr] = useState("");
  const [getWalletAddr, setWalletAddr] = useState("");

  const [full_name, setfullname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [address, setAddr] = useState('');

  const [state, setState] = useState("Back");
  const [verify, setVerify] = useState("ss");
  const [code, setOPT] = useState("");
  // const [submit, setSubmit] = useState("");

  const [wallet_address, setWallet_address] = useState(addressx);

  const handlewalletChange = (e) => {
    setWallet_address(e.target.value);
  };

  const SendOPT = (e) => {
    e.preventDefault()
    API.fetchPost({ email }, '/verify-email')
      .then(x =>
      (
        x.data.message == "Verification email sent" ? (toast.success(x.data.message, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }),
          setVerify("Verify")) :
          toast.error(x.data.message, {
            position: "top-center",
            autoClose: 900,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })


      )
      )
      .catch(err => console.log(err))

  }
  const VerifyOPT = (e) => {
    e.preventDefault()
    API.fetchPost({ code, email, full_name, phone, address, wallet_address }, '/verify-code')
      .then(x => x.data.msg == "Verified successfully !" ?
        toast.success(x.data.msg, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }, setVerify("")) :

        toast.error(x.data.msg, {
          position: "top-center",
          autoClose: 900,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      )
      .catch(err => console.log(err))
    // setSubmit("Submit");
  }
  useEffect(() => {
    API.fetchGet('/get_user_profile')
      .then(x => (
        setgetfullname(x.data.full_name),
        setgetAddr(x.data.address),
        setgetemail(x.data.email),
        setgetphone(x.data.phone),
        // console.log(x.data),
        setWalletAddr(x.data.wallet_address)
      ))
      .catch(x => console.log(x))
  }, [getfull_name, getaddress, getemail, getphone, verify])
 

  return (
    <div className="sm:mx-[30%]">
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {state == "Edit" && (
        <div>
          <form
            // onSubmit={submitForm}
            className="grid md:grid-cols-1 gap-2 my-2"
          >
            <input
              type={"text"}
              onChange={(e) => setemail(e.target.value)}
              placeholder={"Email"}
              className="shadow-secondary shadow-md rounded-lg p-2 text-primary w-[100%] z-0"
            />
            <input
              type={"text"}
              onChange={(e) => setfullname(e.target.value)}
              placeholder={"Full Name"}
              className="shadow-secondary shadow-md rounded-lg p-2 text-primary "
            />
            <input
              type={"text"}
              onChange={(e) => setAddr(e.target.value)}
              placeholder={"Address"}
              className="shadow-secondary shadow-md rounded-lg p-2 text-primary "
            />

            <div className="flex w-[100%] gap-0.5">
              <select
                // onChange={(e) => setphone(e.target.value)}
                className="shadow-secondary shadow-md rounded-lg p-2 w-[35%] text-gray-400"
              >
                <option value="" disabled selected>
                  Country
                </option>
                <option value="+93">+93 AF (Afghanistan)</option>
                <option value="+355">+355 AL (Albania)</option>
                <option value="+213">+213 DZ (Algeria)</option>
                <option value="+1-684">+1-684 AS (American Samoa)</option>
                <option value="+376">+376 AD (Andorra)</option>
                <option value="+244">+244 AO (Angola)</option>
                <option value="+1-264">+1-264 AI (Anguilla)</option>
                <option value="+672">+672 AQ (Antarctica)</option>
                <option value="+1-268">+1-268 AG (Antigua and Barbuda)</option>
                <option value="+54">+54 AR (Argentina)</option>
                <option value="+374">+374 AM (Armenia)</option>
                <option value="+297">+297 AW (Aruba)</option>
                <option value="+61">+61 AU (Australia)</option>
                <option value="+43">+43 AT (Austria)</option>
                <option value="+994">+994 AZ (Azerbaijan)</option>
                <option value="+1-242">+1-242 BS (Bahamas)</option>
                <option value="+973">+973 BH (Bahrain)</option>
                <option value="+880">+880 BD (Bangladesh)</option>
                <option value="+1-246">+1-246 BB (Barbados)</option>
                <option value="+375">+375 BY (Belarus)</option>
                <option value="+32">+32 BE (Belgium)</option>
                <option value="+501">+501 BZ (Belize)</option>
                <option value="+229">+229 BJ (Benin)</option>
                <option value="+1-441">+1-441 BM (Bermuda)</option>
                <option value="+975">+975 BT (Bhutan)</option>
                <option value="+591">+591 BO (Bolivia)</option>
                <option value="+387">+387 BA (Bosnia and Herzegovina)</option>
                <option value="+267">+267 BW (Botswana)</option>
                <option value="+55">+55 BR (Brazil)</option>
                <option value="+673">+673 BN (Brunei)</option>
                <option value="+359">+359 BG (Bulgaria)</option>
                <option value="+226">+226 BF (Burkina Faso)</option>
                <option value="+257">+257 BI (Burundi)</option>
                <option value="+855">+855 KH (Cambodia)</option>
                <option value="+237">+237 CM (Cameroon)</option>
                <option value="+1">+1 CA (Canada)</option>
                <option value="+238">+238 CV (Cape Verde)</option>
                <option value="+1-345">+1-345 KY (Cayman Islands)</option>
                <option value="+236">+236 CF (Central African Republic)</option>
                <option value="+235">+235 TD (Chad)</option>
                <option value="+56">+56 CL (Chile)</option>
                <option value="+86">+86 CN (China)</option>
                <option value="+53">+53 CX (Christmas Island)</option>
                <option value="+61">+61 CC (Cocos Islands)</option>
                <option value="+57">+57 CO (Colombia)</option>
                <option value="+269">+269 KM (Comoros)</option>
                <option value="+243">+243 CD (Congo)</option>
                <option value="+682">+682 CK (Cook Islands)</option>
                <option value="+506">+506 CR (Costa Rica)</option>
                <option value="+225">+225 CI (Cote D'Ivoire)</option>
                <option value="+385">+385 HR (Croatia)</option>
                <option value="+53">+53 CU (Cuba)</option>
                <option value="+357">+357 CY (Cyprus)</option>
                <option value="+420">+420 CZ (Czech Republic)</option>
                <option value="+45">+45 DK (Denmark)</option>
                <option value="+253">+253 DJ (Djibouti)</option>
                <option value="+1-767">+1-767 DM (Dominica)</option>
                <option value="+1-809 ">+1-809 DO (Dominican Republic)</option>
                <option value="+670">+670 TP (East Timor)</option>
                <option value="+593 ">+593 EC (Ecuador)</option>
                <option value="+20">+20 EG (Egypt)</option>
                <option value="+503">+503 SV (El Salvador)</option>
                <option value="+240">+240 GQ (Equatorial Guinea)</option>
                <option value="+291">+291 ER (Eritrea)</option>
                <option value="+372">+372 EE (Estonia)</option>
                <option value="+251">+251 ET (Ethiopia)</option>
                <option value="+500">+500 FK (Falkland Islands)</option>
                <option value="+298">+298 FO (Faroe Islands)</option>
                <option value="+679">+679 FJ (Fiji)</option>
                <option value="+358">+358 FI (Finland)</option>
                <option value="+33">+33 FR (France)</option>
                <option value="+594">+594 GF (French Guiana)</option>
                <option value="+689">+689 PF (French Polynesia)</option>
                <option value="+241">+241 GA (Gabon)</option>
                <option value="+220">+220 GM (Gambia)</option>
                <option value="+995">+995 GE (Georgia)</option>
                <option value="+49">+49 DE (Germany)</option>
                <option value="+233">+233 GH (Ghana)</option>
                <option value="+350">+350 GI (Gibraltar)</option>
                <option value="+30">+30 GR (Greece)</option>
                <option value="+299">+299 GL (Greenland)</option>
                <option value="+1-473">+1-473 GD (Grenada)</option>
                <option value="+590">+590 GP (Guadeloupe)</option>
                <option value="+1-671">+1-671 GU (Guam)</option>
                <option value="+502">+502 GT (Guatemala)</option>
                <option value="+224">+224 GN (Guinea)</option>
                <option value="+245">+245 GW (Guinea-Bissau)</option>
                <option value="+592">+592 GY (Guyana)</option>
                <option value="+509">+509 HT (Haiti)</option>
                <option value="+504">+504 HN (Honduras)</option>
                <option value="+852">+852 HK (Hong Kong)</option>
                <option value="+36">+36 HU (Hungary)</option>
                <option value="+354">+354 IS (Iceland)</option>
                <option value="+91">+91 IN (India)</option>
                <option value="+62">+62 ID (Indonesia)</option>
                <option value="+98">+98 IR (Iran)</option>
                <option value="+964">+964 IQ (Iraq)</option>
                <option value="+353">+353 IE (Ireland)</option>
                <option value="+972">+972 IL (Israel)</option>
                <option value="+39">+39 IT (Italy)</option>
                <option value="+1-876">+1-876 JM (Jamaica)</option>
                <option value="+81">+81 JP (Japan)</option>
                <option value="+962">+962 JO (Jordan)</option>
                <option value="+7">+7 KZ (Kazakstan)</option>
                <option value="+254">+254 KE (Kenya)</option>
                <option value="+686">+686 KI (Kiribati)</option>
                <option value="+850">+850 KP (Korea)</option>
                <option value="+82">+82 KR (Korea)</option>
                <option value="+965">+965 KW (Kuwait)</option>
                <option value="+996">+996 KG (Kyrgyzstan)</option>
                <option value="+856">
                  +856 LA (Lao People's Democratic Republic)
                </option>
                <option value="+371">+371 LV (Latvia)</option>
                <option value="+961">+961 LB (Lebanon)</option>
                <option value="+266">+266 LS (Lesotho)</option>
                <option value="+231">+231 LR (Liberia)</option>
                <option value="+218">+218 LY (Libya)</option>
                <option value="+423">+423 LI (Liechtenstein)</option>
                <option value="+370">+370 LT (Lithuania)</option>
                <option value="+352">+352 LU (Luxembourg)</option>
                <option value="+853">+853 MO (Macau)</option>
                <option value="+389">+389 MK (Macedonia)</option>
                <option value="+261">+261 MG (Madagascar)</option>
                <option value="+265">+265 MW (Malawi)</option>
                <option value="+60">+60 MY (Malaysia)</option>
                <option value="+960">+960 MV (Maldives)</option>
                <option value="+223">+223 ML (Mali)</option>
                <option value="+356">+356 MT (Malta)</option>
                <option value="+692">+692 MH (Marshall Islands)</option>
                <option value="+596">+596 MQ (Martinique)</option>
                <option value="+222">+222 MR (Mauritania)</option>
                <option value="+230">+230 MU (Mauritius)</option>
                <option value="+269">+269 YT (Mayotte)</option>
                <option value="+52">+52 MX (Mexico)</option>
                <option value="+691">+691 FM (Micronesia)</option>
                <option value="+373">+373 MD (Moldova)</option>
                <option value="+377">+377 MC (Monaco)</option>
                <option value="+976">+976 MN (Mongolia)</option>
                <option value="+1-664">+1-664 MS (Montserrat)</option>
                <option value="+212">+212 MA (Morocco)</option>
                <option value="+258">+258 MZ (Mozambique)</option>
                <option value="+95">+95 MM (Myanmar)</option>
                <option value="+264">+264 NA (Namibia)</option>
                <option value="+674">+674 NR (Nauru)</option>
                <option value="+977">+977 NP (Nepal)</option>
                <option value="+31">+31 NL (Netherlands)</option>
                <option value="+599">+599 AN (Netherlands Antilles)</option>
                <option value="+687">+687 NC (New Caledonia)</option>
                <option value="+64">+64 NZ (New Zealand)</option>
                <option value="+505">+505 NI (Nicaragua)</option>
                <option value="+227">+227 NE (Niger)</option>
                <option value="+234">+234 NG (Nigeria)</option>
                <option value="+683">+683 NU (Niue)</option>
                <option value="+672">+672 NF (Norfolk Island)</option>
                <option value="+1-670">
                  +1-670 MP (Northern Mariana Islands)
                </option>
                <option value="+47">+47 NO (Norway)</option>
                <option value="+968">+968 OM (Oman)</option>
                <option value="+92">+92 PK (Pakistan)</option>
                <option value="+680">+680 PW (Palau)</option>
                <option value="+970">+970 PS (Palestinian State)</option>
                <option value="+507">+507 PA (Panama)</option>
                <option value="+675">+675 PG (Papua New Guinea)</option>
                <option value="+595">+595 PY (Paraguay)</option>
                <option value="+51">+51 PE (Peru)</option>
                <option value="+63">+63 PH (Philippines)</option>
                <option value="+48">+48 PL (Poland)</option>
                <option value="+351">+351 PT (Portugal)</option>
                <option value="+1-787">+1-787 PR (Puerto Rico)</option>
                <option value="+974 ">+974 QA (Qatar, State of)</option>
                <option value="+262">+262 RE (Reunion)</option>
                <option value="+40">+40 RO (Romania)</option>
                <option value="+7">+7 RU (Russian Federation)</option>
                <option value="+250">+250 RW (Rwanda)</option>
                <option value="+290">+290 SH (Saint Helena)</option>
                <option value="+1-869">
                  +1-869 KN (Saint Kitts and Nevis)
                </option>
                <option value="+1-758">+1-758 LC (Saint Lucia)</option>
                <option value="+508">
                  +508 PM (Saint Pierre and Miquelon)
                </option>
                <option value="+1-784">
                  +1-784 VC (Saint Vincent and the Grenadines)
                </option>
                <option value="+685">+685 WS (Samoa)</option>
                <option value="+378">+378 SM (San Marino)</option>
                <option value="+239">+239 ST (Sao Tome and Principe)</option>
                <option value="+966">+966 SA (Saudi Arabia)</option>
                <option value="+221">+221 SN (Senegal)</option>
                <option value="+248">+248 SC (Seychelles)</option>
                <option value="+232">+232 SL (Sierra Leone)</option>
                <option value="+65">+65 SG (Singapore)</option>
                <option value="+421">+421 SK (Slovakia)</option>
                <option value="+386">+386 SI (Slovenia)</option>
                <option value="+677">+677 SB (Solomon Islands)</option>
                <option value="+252">+252 SO (Somalia)</option>
                <option value="+27">+27 ZA (South Africa)</option>
                <option value="+34">+34 ES (Spain)</option>
                <option value="+94">+94 LK (Sri Lanka)</option>
                <option value="+249">+249 SD (Sudan)</option>
                <option value="+597">+597 SR (Suriname)</option>
                <option value="+268">+268 SZ (Swaziland)</option>
                <option value="+46">+46 SE (Sweden)</option>
                <option value="+41">+41 CH (Switzerland)</option>
                <option value="+963">+963 SY (Syria)</option>
                <option value="+886">+886 TW (Taiwan)</option>
                <option value="+992">+992 TJ (Tajikistan)</option>
                <option value="+255">+255 TZ (Tanzania)</option>
                <option value="+66">+66 TH (Thailand)</option>
                <option value="+690">+690 TK (Tokelau)</option>
                <option value="+676">+676 TO (Tonga)</option>
                <option value="+1-868">+1-868 TT (Trinidad and Tobago)</option>
                <option value="+216">+216 TN (Tunisia)</option>
                <option value="+90">+90 TR (Turkey)</option>
                <option value="+993">+993 TM (Turkmenistan)</option>
                <option value="+1-649">
                  +1-649 TC (Turks and Caicos Islands)
                </option>
                <option value="+688">+688 TV (Tuvalu)</option>
                <option value="+256">+256 UG (Uganda)</option>
                <option value="+380">+380 UA (Ukraine)</option>
                <option value="+971">+971 AE (United Arab Emirates)</option>
                <option value="+44">+44 GB (United Kingdom)</option>
                <option value="+1">+1 US (United States)</option>
                <option value="+598">+598 UY (Uruguay)</option>
                <option value="+998">+998 UZ (Uzbekistan)</option>
                <option value="+678">+678 VU (Vanuatu)</option>
                <option value="+418">+418 VA (Vatican City State)</option>
                <option value="+58">+58 VE (Venezuela)</option>
                <option value="+84">+84 VN (Vietnam)</option>
                <option value="+1-284">+1-284 VI (Virgin Islands)</option>
                <option value="+681">
                  +681 WF (Wallis and Futuna Islands)
                </option>
                <option value="+967">+967 YE (Yemen)</option>
                <option value="+260">+260 ZM (Zambia)</option>
                <option value="+263">+263 ZW (Zimbabwe)</option>
              </select>
              <input
                type={"number"}
                onChange={(e) => setphone(e.target.value)}
                placeholder={"Phone"}
                className="shadow-secondary shadow-md rounded-lg p-2 text-primary w-[65%]"
              />
              
            </div>
            {addressx ? <div className="flex">
              <input
                type="text"
                value={addressx}
                placeholder="Wallet address.."
                className="shadow-secondary shadow-md rounded-lg p-2 text-primary w-[100%] z-0"
              />
            </div> :
              <div className="text-red-500 sm:text-sm text-xs">*Please Connect Wallet First to fill this form and Submit.</div>
            }

            {verify == "Verify" && <div className="flex">
              <input
                type={"text"}
                placeholder="Verify OTP"
                onChange={(e) => setOPT(e.target.value)}
                className="shadow-secondary shadow-md rounded-lg p-2 text-primary w-[75%] z-0"
              />
              <button className="bg-primary text-texting py-1 px-3 ml-4 text-xs rounded-2xl" onClick={(e) => SendOPT(e)}>Resent OPT</button>
            </div>

            }
            {verify != "Verify" ? <div className="flex justify-center gap-0.5 w-[100%]">
              {/* <button
                onClick={() => {
                  setState("Back");
                }}
                className="bg-primary text-texting font-bold py-2 px-2 rounded-lg w-[35%]"
              >
                Back
              </button> */}


              {addressx &&
                <button onClick={SendOPT}
                  className="bg-primary text-texting font-bold py-2 px-2 rounded-lg w-[100%]"
                >
                  Sumbit
                </button>}
            </div> :
              <div className="flex justify-center  w-[100%]">
                <button onClick={(e) => (VerifyOPT(e), setState("Back"))} className="bg-primary w-[100%] text-texting font-bold py-2 rounded-lg z-10  my-0.5 text-xs sm:text-base">
                  Verify
                </button>
              </div>
            }

          </form>
        </div>
      )}

      {state == "Back" && (
        <div className="bg-white rounded-lg px-2 h-[70%] overflow-scroll">
          <div className="py-2">
            <div className="text-gray-500 text-xs sm:text-base">Name</div>
            <div className="flex gap-1 mx-2">
              <CgProfile className="text-primary" size={20} />
              {getfull_name == null ? <div className="text-red-500 text-xs sm:text-base">
                *Required
              </div> :
                <div className="text-primary capitalize font-bold">
                  {getfull_name}
                </div>
              }
            </div>
            <div className="border-b border-primary"></div>
          </div>

          <div className="py-2">
            <div className="text-gray-500 text-xs sm:text-base">Email</div>
            <div className="flex gap-1 mx-2">
              <MdEmail className="text-primary" size={20} />
              {getemail == null ? <div className="text-red-500 text-xs sm:text-base">
                *Required
              </div> :
                <div className="text-primary font-bold">
                  {getemail}
                </div>}
            </div>
            <div className="border-b border-primary"></div>
          </div>

          <div className="py-2">
            <div className="text-gray-500 text-xs sm:text-base">Phone No.</div>
            <div className="flex gap-1 mx-2">
              <AiFillPhone className="text-primary" size={20} />
              {getphone == null ? <div className="text-red-500 text-xs sm:text-base">
                *Required
              </div> :
                <div className="text-primary capitalize font-bold">
                  {getphone}
                </div>}
            </div>
            <div className="border-b border-primary"></div>
          </div>
          <div className="py-2">
            <div className="text-gray-500 text-xs sm:text-base">Address</div>
            <div className="flex gap-1 mx-2">
              <FaRegAddressCard className="text-primary" size={20} />
              {getaddress == null ? <div className="text-red-500 text-xs sm:text-base">
                *Required
              </div> :
                <div className="text-primary capitalize font-bold">
                  {getaddress}
                </div>}
            </div>
            <div className="border-b border-primary"></div>
          </div>
          <div className="py-2">
            <div className="text-gray-500 text-xs sm:text-base">Wallet Address</div>
            <div className="flex gap-1 mx-2">
              <FaRegAddressCard className="text-primary" size={20} />
              {getWalletAddr == null ? <div className="text-red-500 text-xs sm:text-base">
                *Required
              </div> :
                <div className="w-full overflow-x-scroll text-primary font-bold">
                  {getWalletAddr}
                </div>}
            </div>
            <div className="border-b border-primary"></div>
          </div>

          <div className="py-2">
            <div className="text-gray-500 text-xs sm:text-base">
              Refferal Code
            </div>
            <div className="flex gap-1 mx-2 justify-between">
              <div className="flex gap-1">
                <FaHubspot className="text-primary" size={20} />
                <div className="text-primary font-bold">
                  {datax.refferalID}
                </div>
              </div>
              {/* <div>
                <FiCopy className="text-primary" size={20} />
              </div> */}
            </div>
            <div className="border-b border-primary"></div>
          </div>
        </div>
      )}
      {state == "Back" && (
        <div
          onClick={() => {
            setState("Edit");
          }}
          className="flex justify-center bg-primary my-2 mx-1 cursor-pointer hover:font-bold rounded-lg text-texting px-4 py-2"
        >
          Edit
        </div>
      )}
    </div>
  );
}
