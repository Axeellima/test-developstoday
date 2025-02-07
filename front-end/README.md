## **Country Searcher - Front-End Setup**

This guide will walk you through the steps to set up and run the **Country Searcher** front-end application.

### **1. Clone the Repository**

Start by cloning the repository from GitHub:

```bash
git clone https://github.com/Axeellima/test-developstoday
```

### **2. Navigate to the Front-End Directory**

Once the repository is cloned, navigate to the front-end folder:

```bash
cd front-end
```

### **3. Install Dependencies**

After navigating to the front-end folder, install all the required dependencies by running:

```bash
npm install
```

This will install all the necessary packages specified in the `package.json` file.

### **4. Configure Your Environment**

You need to set up your `.env.local` file to configure the API URL and your preferred port. To do this:

1. Copy the `.env.example` file and rename it to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and configure the following variables:

   - `NEXT_PUBLIC_API_URL`: Set this to your backend API URL.

Example:

```env
NEXT_PUBLIC_API_URL=https://api.example.com/api/
```

### **5. Run the Application**

Now that everything is set up, you can start the development server by running:

```bash
npm run dev
```

This will start the application on (e.g., `http://localhost:3000`). You can now open the app in your browser and begin interacting with it.

---

### **Troubleshooting**

If you encounter any issues while setting up or running the app, make sure that:

1. The API URL in `.env.local` is correct.
2. All dependencies are installed properly (try running `npm install` again if needed).
3. Your port is not already in use by another application. You can change the port in `.env.local`.

---
