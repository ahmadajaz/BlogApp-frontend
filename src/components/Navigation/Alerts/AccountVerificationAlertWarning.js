import { useDispatch, useSelector } from "react-redux";
import { ExclamationIcon, UserIcon } from "@heroicons/react/solid";
import { accVerificationSendTokenAction } from "../../../redux/slices/accountVerification/accVerificationSlices";

export default function AccountVerificationAlertWarning() {
  const dispatch = useDispatch();
  return (
    <div className="bg-red-500 border-l-4 border-yellow-400 p-1">
      <div className="flex">
        <div className="flex-shrink-0">
          <UserIcon
            className="h-10 w-10 text-white"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-3xl font-bold text-white">
            Start Blogging Here.{" "}
            <button
              onClick={() => dispatch(accVerificationSendTokenAction())}
              className="font-medium underline text-green-200 hover:text-yellow-600"
            >
              
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
