import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routers";



function App() {
  return (
    <>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider 
            router={router} 
            future={{ v7_startTransition: true }}
          />
        </Suspense>
    </>
  );
}

export default App;
