
type ConfirmModalProps = {
  onClose: () => void;
  onConfirm: () => void;
  nameuser?:string,
};

export default function ConfirmModal({  onClose, onConfirm,nameuser}: ConfirmModalProps) {
    const submit=()=>{
        onConfirm();
        onClose()
    }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">Xác nhận xóa</h2>
        <p>Bạn có chắc chắn muốn xóa sinh viên {nameuser} này không?</p>
        <div className="flex justify-end gap-3 mt-6">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Hủy
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={submit}
          >
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
}
