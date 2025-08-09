// import React from "react"



// interface  InputFieldProps {
//     id:string
//     label:string
//     value:string
//     type?:string
//     name:string
//     placeholder?:string
//     required?:boolean
//     options:string []
//     onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

// export default function Input({id,name,type="text",label,value,onChange,options}:InputFieldProps){
//    <div className="flex flex-col space-y-1">
//           <label className="font-semibold">{label}</label>
//           {
//             options?(
//                 <select name={name} value={value} onChange={(event: React.ChangeEvent<HTMLInputElement>) => void()} id={id} type={type} className="border rounded px-2 py-1">

//                {option.map(opt=>{

//                 <option key={opt} value={opt}>{opt}</option>
//                })} 

//              </select>
//                : (
//         <input
//           type={type}
//           name={name}
//           value={value}
//           onChange={onChange}
//           className="border rounded px-2 py-1"
//         />
//             )
//           }
//    </div>
// }


import React from "react";

interface InputFieldProps {
    id: string;
    label: string;
    value: string;
    type?: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    options?: string[]; 
    onChange: (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
}

export default function Input({
    id,
    name,
    type = "text",
    label,
    value,
    onChange,
    placeholder,
    required = false,
    options,
}: InputFieldProps) {
    return (
        <div className="flex flex-col  space-y-1">
            <label htmlFor={id} className="font-semibold">
                {label}
            </label>

            {options ? (
                <select
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className="border rounded   px-2 py-1"
                >
                    <option value="">-- Select an option --</option>
                    {options.map((opt) => (
                        <option key={opt} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className="border rounded  px-2 py-1"
                />
            )}
        </div>
    );
}
