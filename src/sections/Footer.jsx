import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="flex flex-col justify-center">
                <a href="https://github.com/InputOutputStream" target="_blank" rel="noreferrer">
                    github.com/InputOutputStream
                </a>
            </div>
            <div className="socials">
                {socialImgs.map((img) => (
                <a className="icon" target="_blank" rel="noreferrer" href={img.url} key={img.name}>
                    <img src={img.imgPath} alt={img.name} />
                </a>
            ))}
            </div>

            <div className="flex flex-col justify-center md:items-start items-center">
                <p className="text-center md:text-end">
                    © {new Date().getFullYear()} Hermann Arnold Edu Guiedi
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
