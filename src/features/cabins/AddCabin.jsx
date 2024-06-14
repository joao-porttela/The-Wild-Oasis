import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModel, setIsOpenModel] = useState(false);

//   function handleOnClose() {
//     setIsOpenModel(false);
//   }

//   return (
//     <div>
//       <Button onClick={() => setIsOpenModel((show) => !show)}>
//         Add new cabin
//       </Button>

//       {isOpenModel && (
//         <Modal onClose={handleOnClose}>
//           <CreateCabinForm onClose={handleOnClose} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
