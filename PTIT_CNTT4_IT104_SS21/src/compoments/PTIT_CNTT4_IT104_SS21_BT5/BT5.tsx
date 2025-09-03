
export default function BT5() {
  return (
   <div className="bg-cyan-200 w-[250px] h-[250px] flex items-center rounded-[3px] bg-opacity-75 ">
      <div className="parent bg-cyan-200 w-[200px] h-[200px] m-auto relative border-[1px] border-solid border-cyan-300  ">
        <p className="pt-4 pl-4 text-blue-400">Relative parent</p>
        <div className="child bg-blue-500 w-[130px] text-white absolute bottom-0 left-0 rounded-[5px] p-2 ">
          <p>Absolute child</p>
        </div>
      </div>
    </div>
  )
}
