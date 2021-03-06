import fs from 'fs'
import path from 'path'
import { fileExists, readDir, writeFile, readFile } from '../FileSystem'

describe('shared / FileSystem', () => {
  describe('fileExists', () => {
    it('Sould check if fileExist', () => {
      const realPath = path.resolve(__dirname, '..', 'FileSystem.js')
      const fakePath = path.resolve(__dirname, '..', 'fake.js')

      expect(fileExists(realPath)).toEqual(true)
      expect(fileExists(fakePath)).toEqual(false)
    })
  })

  describe('readDir', () => {
    it('Sould read a directory', () => {
      const dir = path.resolve(__dirname, '..', '..', 'client')
      const files = readDir(dir)
      expect(files.length).toEqual(1)
    })
  })

  describe('readFile', () => {
    it('Sould write a file', () => {
      const file = path.resolve(__dirname, 'test.js')
      const content = 'Hello!'
      writeFile(file, content)

      const readed = readFile(file, 'utf8')

      fs.unlinkSync(file)
      expect(readed).toEqual(content)
    })
  })

  describe('writeFile', () => {
    it('Sould write a file', () => {
      const file = path.resolve(__dirname, 'test.js')
      const content = 'Hello!'
      writeFile(file, content)

      const wrote = fs.readFileSync(file, 'utf8')
      fs.unlinkSync(file)

      expect(wrote).toEqual(content)
    })
  })
})
