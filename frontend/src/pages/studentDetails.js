import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/studentDetails.css';

const StudentDetails = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/student/${id}`);
                setStudent(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching student data:", error);
                setLoading(false);
            }
        };
        fetchStudent();
    }, [id]);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleFileUpload = async (e) => {
        e.preventDefault();
        if (!selectedFile) return;

        setUploading(true);
        const formData = new FormData();
        formData.append('profileImage', selectedFile);

        try {
            await axios.post(`http://localhost:5000/api/student/${id}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Reload student data to show updated profile image
            const response = await axios.get(`http://localhost:5000/api/student/${id}`);
            setStudent(response.data);
        } catch (error) {
            console.error("Error uploading profile image:", error);
        } finally {
            setUploading(false);
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div className="details-container">
            <h2>Student Details</h2>
            {student.image && (
                <img
                    src={`http://localhost:5000/${student.image}`}
                    alt={`${student.sname}'s profile`}
                    className="student-image"
                />
            )}
            <p><span>ID:</span> {student.id}</p>
            <p><span>Name:</span> {student.sname}</p>
            <p><span>Email:</span> {student.email}</p>
            <p><span>Phone Number:</span> {student.phn}</p>

            <form onSubmit={handleFileUpload}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit" disabled={uploading}>
                    {uploading ? "Uploading..." : "Upload Profile Image"}
                </button>
            </form>
        </div>
    );
};

export default StudentDetails;
