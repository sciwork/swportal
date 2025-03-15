"use client";

import Image from "next/image";
import Link from "next/link";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconImg from "@/assets/android-chrome-192x192.png";

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto flex flex-col bg-blue-900 text-white">
      <div className="flex-grow container mx-auto my-4 px-2 py-4">
        <div className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 sm:text-left lg:grid-cols-4">
          <div className="flex sm:items-start">
            <Image
              className="mr-8 mt-3 inline h-12 w-12"
              src={iconImg}
              alt="sciwork icon"
            />
            <h2>sciwork</h2>
          </div>

          <div className="flex flex-col">
            <h3 className="mb-2 text-red-800">activity</h3>
            <div className="pl-2">
              <Link href="/meetup" className="block text-white no-underline">
                meetup
              </Link>
              <Link href="/sprint" className="block text-white no-underline">
                sprint
              </Link>
              <Link
                href="/conference"
                className="block text-white no-underline"
              >
                conference & seminar
              </Link>
            </div>
            <h3 className="mb-1 mt-1 text-red-800">about</h3>
            <div className="pl-2">
              <Link
                href="/about#organizers"
                className="block text-white no-underline"
              >
                organizers
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-red-800">project</h3>
            <div className="pl-2">
              <Link
                href="/project#modmesh"
                className="block text-white no-underline"
              >
                modmesh
              </Link>
              <Link
                href="/project#python-official-documents-translation-zh-tw"
                className="block text-white no-underline"
              >
                Python Docs Translation
              </Link>
              <Link
                href="/project#sciwork-portal"
                className="block text-white no-underline"
              >
                sciwork portal
              </Link>
              <Link
                href="/project#pyliteracy"
                className="block text-white no-underline"
              >
                pyLiteracy
              </Link>
              <Link
                href="/project#utensor"
                className="block text-white no-underline"
              >
                uTensor
              </Link>
              <Link
                href="/project#cytnx"
                className="block text-white no-underline"
              >
                Cytnx
              </Link>
              <Link
                href="/project#commitizen-tools"
                className="block text-white no-underline"
              >
                Commitizen-Tools
              </Link>
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-red-800">contact us</h3>
            <div className="pl-2">
              <Link
                href="mailto:contact@sciwork.dev"
                className="block text-white no-underline"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                contact@sciwork.dev
              </Link>
              <Link
                href="https://github.com/sciwork/swportal"
                className="block text-white no-underline"
              >
                <FontAwesomeIcon icon={faGithub} className="mr-1" />
                github.com/sciwork/swportal
              </Link>
              <div className="mt-4 flex flex-row gap-4">
                <div className="mr-4 flex h-full w-full items-center justify-center rounded-lg border-2 border-white px-6 py-4">
                  <Link
                    href="https://discord.gg/6MAkFrD"
                    className="flex h-full flex-col items-center justify-center px-2 text-white no-underline"
                  >
                    <span className="mb-4">Join us on Discord!</span>
                    <FontAwesomeIcon
                      icon={faDiscord}
                      className="text-white"
                      style={{ fontSize: "3rem" }}
                    />
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
