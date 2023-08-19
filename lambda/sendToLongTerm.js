const AWS = require('aws-sdk');

const S3 = new AWS.S3({
    region:'us-west-2',
    accessKeyId:'',
    secretAccessKey:'',
    signatureVersion: 'v4',
});


const params = {
    Bucket:'data-file-bucket',
    Key:'profile.jpg',
    Expires: 60*5
}
const generateGetUrl = async() =>{
    const url = await new Promise((resolve,reject)=>{
        S3.getSignedUrl('getObject',params,(err,url)=>{
            if(err)
                 reject(err);
             resolve(url);
        });
    });

    console.log(url);
}

// generateGetUrl();


const generatePutUrl = async() => { 
    const url = await new Promise((resolve,reject)=>{
        S3.getSignedUrl('putObject',params,(err,url)=>{
            if(err) reject(err);
            resolve(url);
        })
    });

    console.log(url);
}

generatePutUrl();



