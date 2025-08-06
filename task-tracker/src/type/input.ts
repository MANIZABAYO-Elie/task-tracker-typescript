

export interface  Input {
    id:string
    label:string
    value:string
    name:string
    placeholder?:string
    required?:boolean
    options:string []
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}