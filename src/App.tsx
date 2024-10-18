import { Button } from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import './App.css'

function App() {


  return (
    <>
      <div className="bg-[#e0f1e7] h-screen w-screen flex flex-col justify-center items-center">

        <div className="bg-white p-[36px] rounded-sm">

        <h1 className='text-[28px] font-semibold font-roboto'>Contact Us</h1>

        <div className="flex space-x-4 pt-6 pb-[7px] pt-[20px]">
                  
                  <div >         
                      <Label htmlFor="firstname" className="text-[15px] text-[#464646] pb-[7px]">First Name</Label>
                      <Input type="text" className='border border-gray-300 p-[10px] w-72 rounded-md'/>
                  </div>
                  <div>
                      <Label htmlFor="secondname" className="text-[15px] text-[#464646] pb-[7px]">Second Name</Label>
                      <Input type="text" className='border border-gray-300 p-[10px] w-72 rounded-md'/>
                  </div>
                
              </div>

              <div className=" pb-[7px] pt-[20px]">
                    <Label htmlFor="email" className="text-[15px] text-[#464646] pb-[7px]">Email</Label>
                    <Input type="text" className="border border-gray-300 p-[10px] rounded-md"/>
             </div>


             <Label htmlFor="" className="text-[15px] text-[#464646]">Query Type</Label>
             <div className="flex gap-3 pb-[7px] pt-[10px]">
      
                  <div className="flex items-center border border-gray-300 p-[10px_10px_10px_25px] w-72 rounded-md"> 
                      <input type="radio" name="radio"/>        
                      <Label htmlFor="" className="pl-[14px] text-[#464646]">General Enquiry</Label>
                  </div>
                  <div className="flex items-center border border-gray-300 p-[10px_10px_10px_25px] w-72 rounded-md">
                      <input type="radio" name="radio" />   
                      <Label htmlFor="" className="pl-[14px] text-[#464646]">Support Requrest</Label>
                  </div>
                
              </div>

              <div className=" pb-[7px] pt-[20px]">
                    <Label htmlFor="" className="text-[15px] text-[#464646] pb-[7px] pt-[20px]">Message</Label>
                    <Textarea />
              </div>


            <div className='py-[38px] flex'>
              <input type="checkbox" />
              <Label htmlFor="" className="pl-5">I consent to being contacted by the team*</Label>
            </div>

           <div>
            <Button className="p-[16px_268px]">Submit</Button>
           </div>

        </div>


          
      </div>
     {/* <Button>Click me</Button>
     <Input type="email" placeholder="Email" /> */}
    </>
  )
}

export default App
