"use client";

import Image from "next/image";
import Link from "next/link";
import iconImg from "@/assets/android-chrome-192x192.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord,faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white mt-auto flex flex-col">
      <div className="container mx-auto px-2 py-4 flex-grow my-4">
        <div className="grid grid-cols-1 justify-center sm:text-left sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="flex sm:items-start">
            <Image className="inline h-12 w-12 mr-8 mt-3" src={iconImg} alt="sciwork icon" />
            <h2>sciwork</h2>
          </div>

          <div className="flex flex-col">
            <h3 className="text-red-800 mb-2">activity</h3>
            <div className="pl-2">
              <Link href="/meetup" className="block text-white no-underline">meetup</Link>
              <Link href="/sprint" className="block text-white no-underline">sprint</Link>
              <Link href="/conference" className="block text-white no-underline">conference & seminar</Link>
            </div>
            <h3 className="text-red-800 mt-1 mb-1">about</h3>
            <div className="pl-2">
              <Link href="/about#organizers" className="block text-white no-underline">organizers</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-red-800">project</h3>
            <div className="pl-2">
              <Link href="/project#modmesh" className="block text-white no-underline">modmesh</Link>
              <Link href="/project#python-official-documents-translation-zh-tw" className="block text-white no-underline">Python Docs Translation</Link>
              <Link href="/project#sciwork-portal" className="block text-white no-underline">sciwork portal</Link>
              <Link href="/project#pyliteracy" className="block text-white no-underline">pyLiteracy</Link>
              <Link href="/project#utensor" className="block text-white no-underline">uTensor</Link>
              <Link href="/project#cytnx" className="block text-white no-underline">Cytnx</Link>
              <Link href="/project#commitizen-tools" className="block text-white no-underline">Commitizen-Tools</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-red-800">contact us</h3>
            <div className="pl-2">
              <Link href="mailto:contact@sciwork.dev" className="block text-white no-underline">
              <FontAwesomeIcon icon={faEnvelope} className="mr-1"/>
              contact@sciwork.dev
              </Link>
              <Link href="https://github.com/sciwork/swportal" className="block text-white no-underline">
              <FontAwesomeIcon icon={faGithub} className="mr-1"/>
              github.com/sciwork/swportal
                </Link>
              <div className="flex flex-row gap-4 mt-4">
                <div className="flex items-center justify-center py-4 px-6 rounded-lg h-full w-full border-2 border-white mr-4">
                <Link href="https://discord.gg/6MAkFrD" className="flex flex-col items-center px-2 justify-center text-white no-underline h-full">
                    <span className="mb-4">Join us on Discord!</span>
                    <FontAwesomeIcon icon={faDiscord} className="text-white" style={{ fontSize: "3rem" }} />
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
