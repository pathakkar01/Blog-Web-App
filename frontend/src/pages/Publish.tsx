import { ChangeEvent, useState } from "react";
import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const publishPost = async () => {
    const res = await axios.post(
      `${BACKEND_URL}/api/v1/blog`,
      {
        title,
        content: description,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    navigate(`/blog/${res.data.id}`);
  };

  return (
    <div>
      <Appbar />
      <div className="w-full flex justify-center">
        <div className="mt-6 w-full  max-w-screen-lg">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextEditor
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 "
            onClick={publishPost}
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};

const TextEditor = ({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <div className="mt-6 w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
      <div className="px-4 py-2 bg-white rounded-b-lg ">
        <textarea
          id="editor"
          rows={8}
          className="block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:ring-0 focus:outline-none"
          placeholder="Tell your story..."
          required
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Publish;
