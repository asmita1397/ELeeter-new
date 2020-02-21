import React,{useState} from 'react';
import { Button} from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import printer from './Assests/print.jpeg'
function Example(props) {

    const [show, setShow] = useState(false);
    const [value, setValue] = useState(true);



    const handleClose = () => {

        setShow(false);

    }
    const printPreview = () => {

        setShow(false);

        

        setTimeout(() => {
            window.print();
        }, 500)
    }


    const handleShow = () => setShow(true);

    const CheckValue = () => {

        var x = document.getElementById("inlineCheckbox1").value;
        console.log("checkbox value = ",+x)
        if(x === "on") {
            setValue(!value)
            console.log("check box value ", value  ,"And",!value);
            props.showWatermark(value);
        }

    }

    return (
        <div>
            <img onClick={handleShow} style={{ width: 38, cursor: 'pointer', borderRadius: '100px' }} src={printer} />

            <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
         
        <div>
                        <div className="form-check form-check-inline col-md-1 ">
                            <input className="form-check-input" type="checkbox" checked={!value} id="inlineCheckbox1" onClick={CheckValue} />
                            <label style={{whiteSpace: 'nowrap',fontWeight:'500'}} className="form-check-label" >LetterHead Required</label>
                        </div>

                    </div>
                   
      </Modal.Header>
      <Button style={{marginLeft:"auto",whiteSpace: 'nowrap'}} className="btn-sm w-25" variant="primary" onClick={() => { printPreview(); }}>
                        Print Preview
          </Button>
            </Modal>


        </div>
    );
}

export default Example;