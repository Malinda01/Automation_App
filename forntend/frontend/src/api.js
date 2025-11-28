export async function uploadCSV(file) {
    const formData = new FormData();
    formData.append("file", file);
  
    const res = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });
  
    return res.json(); // returns { processed: X }
  }
  