import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
export default function Home() {
  const [input, setInput] = useState("");
  const callAPI = async (request: String) => {
    try {
      const res = await fetch(`https://snapi.dev/api/${request}`);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    // console.log(`https://snapi.dev/api/${request}`);
  };
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <div className="container text-center mt-5  mb-5">
          <h1>SnAPI</h1>
          <p>A Free API for Marvel Snap</p>
        </div>
        <div className="container">
          {/* <label htmlFor="basic-url" className="form-label">
            Your vanity URL
          </label> */}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              https://snapi.dev/api/
            </span>
            <input
              type="text"
              className="form-control"
              id="request"
              aria-describedby="basic-addon3"
              placeholder="cards"
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={() => callAPI(input)}
            >
              Request
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
