import { Button, Form, Image, Input, Modal, Select, Table, Upload } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import uploadFile from "../../utils/upload";
import { PlusOutlined } from '@ant-design/icons';


function MoviesManagerment() {
const[ form] = useForm()
    const [isOpen , setisOpen] = useState(false)
    const [dataSource , setDataSource] = useState([])
    const columns = [{
        title : 'Pet Name',
        dataIndex : 'name',
        key: 'name'
      },
      {
        title : "pet Age",
        dataIndex : 'age',
        key :'age'
      },
      {
        title : 'Pet Poster',
        dataIndex : 'poster_path',
        key: 'poster_path',
        render : (poster_path) => (<Image src= {poster_path} width={50}/>)}
      
    ]
      const [previewOpen, setPreviewOpen] = useState(false);
      const [previewImage, setPreviewImage] = useState('');
      const [fileList, setFileList] = useState([
        
      ]);
      const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
          file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
      };
      const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
      const uploadButton = (
        <button
          style={{
            border: 0,
            background: 'none',
          }}
          type="button"
        >
          <PlusOutlined  />
          <div
            style={{
              marginTop: 8,
            }}
          >
            Upload
          </div>
        </button>
      );
      const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

     async function fetchMovies(){
        const response = await axios.get()
        setDataSource(response.data)
    }
    function handleshowModal(){
        setisOpen(true)
    }
    function handlehideModal(){
        setisOpen(false)
    }
    async function handleSubmit(values){
        console.log(values)
        console.log(values.poster_path.file.originFileObj

        )
        const url = await uploadFile(values.poster_path.file.originFileObj)
       values.poster_path = url
       console.log(values)

      const response = await axios.post("https://6627a8e6b625bf088c093095.mockapi.io/Movies",values)
setDataSource([...dataSource,values])
form.resetFields()
handlehideModal()
    }
    function handleOK(){
        form.submit()
    }
      
      useEffect( ()=>{
        fetchMovies()
      } , [])
  return (
    
    <div>
        <Button onClick={handleshowModal} >Add New Pet</Button>
        <Table dataSource={dataSource} columns={columns} />
        <Modal open={isOpen} title="add pet" onCancel={handlehideModal} onOk={handleOK}>
            <Form form={form} onFinish={handleSubmit}
            labelCol={{span :24,}}>
               <Form.Item
               name ={"name"}
               label ='Pet Name'
              >
               <Input></Input>
               </Form.Item>
               <Form.Item
               name ={"age"}
               label ='Pet Age'
              >
               <Input></Input>
               </Form.Item>
               <Form.Item label="Category" name="category">
            <Select
              options={[
                { value: "Trending", label: <span>Trending</span> },
                { value: "Comedy", label: <span>Comedy</span> },
                { value: "Action", label: <span>Action</span> },
                { value: "Horror", label: <span>Horror</span> },
              ]}
            />
          </Form.Item>
               <Form.Item
               name={"poster_path"}
               label ='poster'
              >
                
             <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
               </Form.Item>
            </Form>
        </Modal>
        {previewImage && (
        <Image
          wrapperStyle={{
            display: 'none',
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
        
        </div>
       
  )
}

export default MoviesManagerment