import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, UseDisclosureProps } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useRef } from "react"
import { httpReq } from "../helper/client"

type SubmitModalProp = UseDisclosureProps & {
  Header: () => JSX.Element
  Body: () => JSX.Element
  formid: string
}
const SubmitModal = ({isOpen, onClose, Header, Body, formid }:SubmitModalProp) => {
  const router = useRouter()
  const onSubmit = async () => {
    let result = await httpReq('/api/user/submit', "POST", { formid })
    if (result.status == 500) {
      alert("Internal Error, the result is not yet saved")
    }
    if (result.status == 400) {
      alert("Please complete all required fields to before submitting")
    }
    router.reload()
  }
  const initialRef = useRef(null)

  if (!isOpen) return <></>
  if (!onClose) return <></>

  return (
    <Modal 
      initialFocusRef={initialRef} 
      isOpen={isOpen} 
      onClose={onClose}
    >
      <ModalOverlay 
        backdropBlur='2px'
      />
      <ModalContent bg={"dark.700"} ref={initialRef}>
        <ModalHeader>
          <Header/> 
        </ModalHeader>
        <ModalBody>
          <Body />
        </ModalBody>
        <ModalFooter>
          <Button variant="orange" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button variant="green" mr={3} onClick={onSubmit}>
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default SubmitModal
