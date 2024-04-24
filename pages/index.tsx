import { useStorageUpload } from '@thirdweb-dev/react'
import { useState } from 'react'
import { NextPage } from "next";

const Home: NextPage = () => {
  const [file, setFile] = useState<File | null>(null)
  const { mutateAsync:upload } = useStorageUpload()

  const uploadtoipfs = async () => {
    const uploadurl = await upload({
      data: [file],
      options:
      {
        uploadWithoutDirectory: true,
        uploadWithGatewayUrl: true
      }
    })
    console.log(uploadurl)
  }
  return (
    <div>
      <input type="file" onChange = {
        (e) => {
          if(e.target.files){
            setFile(e.target.files[0])
        }}
      } />
      <button onClick={uploadtoipfs}>Upload</button>
    </div>
  );
};

export default Home;
