// import React from "react";

// const MemberPage = () => {
 
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
//   myHeaders.append("Access-Control-Allow-Origin", "*")

//   var urlencoded = new URLSearchParams();
//   urlencoded.append("scopes", "PublicApi.Access");
//   urlencoded.append("grant_type", "client_credentials");
//   urlencoded.append("client_id", "6538e4e0-c942-48ec-b806-7f17ae71bf7d");
//   urlencoded.append("client_secret", "FDF6522F0ADC6FE3DAF6A11261432BB6B824146F");

//   var requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: urlencoded,
//     redirect: 'follow'
//   };

//   // https://id.kiotviet.vn
//   const getToken=async()=>{
//     const response=await fetch('https://id.kiotviet.vn/connect/token', requestOptions,)
//     const data=await response.json();
//     console.log({data});
//   } 

//   return (
//     <div className=' bg-black mt-29'>
//     <div className='text-8xl text-white '> Member
//     </div>

//     <button onClick={getToken}> Call get TK </button>
//     </div>
//   )
// }

// export default MemberPage;



// // const Member = () => {
 
// //   return (
// //     <div className="mt-[80px]">
// //       <div className="w-full flex justify-center text-white p-4 text-3xl font-bold">
// //         Form đăng ký thành viên LAB
// //       </div>
// //       <form class="max-w-md mx-auto pb-10 pt-6">
// //         <div class="relative z-0 w-full mb-5 group">
// //           <input
// //             type="text"
// //             name="full_name"
// //             id="name"
// //             class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
// //             placeholder=" "
// //             required
// //           />
// //           <label
// //             for="name"
// //             class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
// //           >
// //             Họ và Tên
// //           </label>
// //         </div>
// //         <div class="relative z-0 w-full mb-5 group">
// //           <input
// //             type="email"
// //             name="floating_email"
// //             id="email"
// //             class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
// //             placeholder=" "
// //             required
// //           />
// //           <label
// //             for="email"
// //             class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
// //           >
// //             Email address
// //           </label>
// //         </div>
// //         <div class="relative z-0 w-full mb-5 group">
// //           <input
// //             type="text"
// //             name="address"
// //             id="address"
// //             class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
// //             placeholder=" "
// //             required
// //           />
// //           <label
// //             for="address"
// //             class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
// //           >
// //             Địa chỉ
// //           </label>
// //         </div>
// //         <div class="grid md:grid-cols-2 md:gap-6">
// //           <div class="relative z-0 w-full mb-5 group">
// //             <input
// //               type="tel"
// //               name="contactNumber"
// //               id="floating_phone"
// //               class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
// //               placeholder=" "
// //               required
// //             />
// //             <label
// //               for="contactNumber"
// //               class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
// //             >
// //               Số điện thoại (+84)
// //             </label>
// //           </div>
// //           <div class="relative z-0 w-full mb-5 group">
// //             <input
// //               type="text"
// //               name="comment"
// //               id="comment"
// //               class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
// //               placeholder=""
// //               required
// //             />
// //             <label
// //               for="comment"
// //               class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
// //             >
// //               Tuổi
// //             </label>
// //           </div>
// //         </div>
// //         <fieldset className="flex">
// //           <legend className="sr-only"> Giới tính </legend>
// //           <div className="flex items-center mb-4 pr-4">
// //             <input
// //               id="genderMale"
// //               type="radio"
// //               name="male"
// //               value={true}
// //               class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
// //             ></input>
// //             <label
// //               for="genderMale"
// //               class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
// //             >
// //               Nam
// //             </label>
// //           </div>
// //           <div className="flex items-center mb-4">
// //             <input
// //               id="genderFemale"
// //               type="radio"
// //               name="female"
// //               value={false}
// //               class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
// //             ></input>
// //             <label
// //               for="genderFemale"
// //               class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
// //             >
// //               Nữ
// //             </label>
// //           </div>
// //         </fieldset>
// //         <button
// //           type="submit"
// //           class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
// //         >
// //           Đăng ký
// //         </button>
        
// //       </form>
// //     </div>
// //   );
// // };

// // export default Member;

// // import axios from "axios";
// // import React from "react";

// // function createMember() {
// //   const callApi = async() => {
// //     const respone = await axios.post(
// //       '/connect/token',
// //       "scopes=PublicApi.Access.FNB&grant_type=client_credentials&client_id=6538e4e0-c942-48ec-b806-7f17ae71bf7d&client_secret=C51EA27C629DA3528AA18D747A9EA9F715D27BA6",
// //         {
// //           headers: {
// //           'Content_Type':'application/x-www-form-urlencoded',
// //            },
// //           baseURL:'https://id.kiotviet.vn'
// //         }
// //       ).then((respone) => {
// //         console.log(respone("access_token"))
// //       })

// //       const {access_token} = respone.data
// //       const dataCustomer = {
// //         code: "KH001" ,
// //         name: "phong" ,
// //         gender: true ,
// //         birthDate: new Date(),
// //       }
// //   }
// //   return (
// //     <div>
// //       <button onClick={callApi()}> Sen request </button>
// //     </div>
// //   )
  
// // }

// // export default createMember;

// // import React from 'react'

// // const Member = () => {
// //   async function createUser(){
// //     const respon = await fetch('https://id.kiotviet.vn/connect/token')
// //   }

// //   return (
// //     <div>Member</div>
// //   )
// // }

// // export default Member


import React from 'react'

const Member = () => {
  return (
    <div
      className='text-black mt-32 bg-slate-50'
    >Member</div>
  )
}

export default Member