import Layout from "@/components/layout/Layout";
import FormInput from "@/components/form/FormInput";
import { useForm } from "react-hook-form";
import FormTextArea from "@/components/form/FormTextArea";
import { useRef, useState } from "react";
import Select from "@/components/select/select";

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [images, setImages] = useState([]);

  const fileSelectRef = useRef(null);

  const onSubmit = async (data) => {
  };

  const onFileSelect = (e) => {
    const file = e.target.files;
    const fileSize = file[0].size / 1000;
    console.log(file, fileSize);
    if (file && file[0]) {
      if (fileSize > 500) {
        let fileErr = "File size must be less than 500KB";
        console.log(fileErr);
        return;
      }
      // this.productDetail.previewFiles.push(file[0]);
      let reader = new FileReader();
      reader.onload = () => {
        const previewFile = reader.result;
        setImages((state) => [...state, previewFile]);
      };
      reader.readAsDataURL(file[0]);
    }
  };

  return (
    <Layout>
      <h3 className="proposal-heading">Deposit</h3>
      <form className="form-text-color" onSubmit={handleSubmit(onSubmit)}>
        <div className="px-5 py-3 rounded-xl mt-4 bg-white">
          <div className="mt-6">
            <h2 className="text-xl-4 mb-8 font-semibold">Greening Noonu Atoll</h2>
            <p className="mb-10">
            Noonu Atoll is seeking 4,680 MVRB (1041 Noonu Boli) to fund conservation efforts for our unihabited islands. Funds will be held in a multisig wallet held by the Noonu Atoll council and dispersed in line with the outlined milestones.
            </p>
            <FormTextArea label="Proposal" id="proposal" />
          </div>
          <div className="grid grid-cols-2 gap-x-8">
            <div className="mt-6">
              <label className="font-semibold" htmlFor="community">Community</label>
              <p>Noonu Atoll</p>
            </div>

            <div className="mt-6">
              <label className="font-semibold" htmlFor="minumum">Deposit Amount</label>
              <input type="text" id="minumum" name="minumum" />
            </div>
          </div>
          <div className="mt-8 pb-12">
            <label className="mb-2" htmlFor="images">
              Images
            </label>
            <div className="flex flex-wrap items-center  gap-x-6 gap-y-4">
              {images.length > 0 &&
                images.map((image, i) => (
                  <div
                    key={i}
                    className="rounded-xl cursor-pointer flex justify-center items-center h-20 w-20 overflow-hidden"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={image}
                      alt=""
                    />
                  </div>
                ))}
              <div
                onClick={() => fileSelectRef.current.click()}
                className="rounded-xl cursor-pointer border border-primary flex justify-center items-center h-20 w-20"
              >
                <svg
                  className="w-10 h-10 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </div>
            <input
              ref={fileSelectRef}
              onInput={onFileSelect}
              type="file"
              name="images"
              id="images"
              className="none"
            />
          </div>
        </div>
        <button className="float-right button-style mt-4">Submit</button>
      </form>
    </Layout>
  );
};
