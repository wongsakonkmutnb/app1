import React from 'react'

export default function FromSelectFile() {
    const inputFile = React.useRef();
    const selectMaxNumFiles = React.useRef();
    const selectMaxSize = React.useRef();

    let maxNumFiles = [1,2,3,4,5];
    let maxSizes = [50,100,200,500,1000];

    const onClickButton = () => {
        let maxNunFiles = selectMaxNumFiles.current.value;
        let maxSize = selectMaxSize.current.value;
        
        if(inputFile.current.files.length > maxNunFiles){
            alert(`เลือกได้ไม่เกิน ${maxNunFiles} ไฟล์`);
            return
        }
        for(let f of inputFile.current.files){
            if(f.size > maxSize*1000){
                alert(`ไฟล์ ${f.name} มีขนาดเกิน ${maxSize} KB`);
                return
            }
        }
        alert("File OK");
    }
    
    return (
        <div className="mt-4 mx-auto p-3 rounded"
            style={{ width:'400px',background:'#cee' }}>

                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="maxNumFiles" className="form-label">จำนวนไฟล์สูงสุด</label>
                        <select id="maxNumFiles" className="form-select form-select-sm" ref={selectMaxNumFiles}>
                            {maxNumFiles.map(i => {
                                return <option value={i}>{i}</option>
                            })}
                        </select>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="maxSize" className="form-label">ขนาดไฟล์สูงสุด (KB)</label>
                        <select id="maxSize" className="form-select form-select-sm" ref={selectMaxSize}>
                            {maxSizes.map(i => {
                                return <option value={i}>{i}</option>
                            })}
                        </select>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="file" className="form-label">เลือกไฟล์สูงสุด</label>
                        <input type="file" id="file" accept="image/*" 
                            className="form-control form-control-sm" ref={inputFile} multiple/>
                    </div>

                    <div className="text-center mt-4">
                        <button type="button" className="btn btn-sm btn-primary px-4" 
                        onClick={onClickButton}>Ok</button>
                    </div>

                </form>
        </div>
  )
}
