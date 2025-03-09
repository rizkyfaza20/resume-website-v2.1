'use client';

import Link from "next/link"
import { Github, Linkedin, FileText, ArrowLeft } from "lucide-react"
import React from 'react'

export default function ContactPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col items-center justify-center p-4" role="main">
      <div className="max-w-2xl w-full">
        <Link href="/" className="flex items-center text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="mr-2" />
          Back to Resume
        </Link>
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Rizky Faza</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://github.com/rizkyfaza20"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition duration-300"
          >
            <Github className="mr-2" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/mrfzy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition duration-300"
          >
            <Linkedin className="mr-2" />
            LinkedIn
          </a>
          <a
            href="https://medium.com/@wedusawan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition duration-300"
          >
            <FileText className="mr-2" />
            Medium
          </a>
          <a
            href="https://wedusawan.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition duration-300"
          >
            <FileText className="mr-2" />
            Hashnode
          </a>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">Feel free to reach out for collaborations or just a friendly hello</p>
          <a href="mailto:john.doe@example.com" className="text-blue-400 hover:text-blue-300">
            Here&apos;s my email
          </a>
        </div>
      </div>
    </div>
  )
}

