require('dotenv').config();

const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'dxcfzbbe6', 
    api_key: '531146923627114',
    api_secret: 'NVTQ1Mg7hIcV0yCha9Ba8w05uYs'
})

exports.uploads = (file, folder) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({
                url: result.secure_url,
                id: result.public_id
            })
        }, {
            resource_type: "auto",
            folder: folder
        })
    })
}
