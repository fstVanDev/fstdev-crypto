import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { contractABI, contractAddress } from '../utils/constants'

export const TranscactionContext = React.createContext()

const { ethereum } = window


const getEthereumContarct = () => {
   const provider = new ethers.providers.Web3Provider(ethereum)
   const signer = provider.getSigner()
   const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer)

   console.log({
      provider,
      signer,
      transactionsContract
   });
}

export const TransactionProvider = ({ children }) => {

   const checkIfWalletConnected = async () => {
      if (!ethereum) return alert('Please install Metamask!')
      const accounts = await ethereum.request({ method: 'eth_accounts' })

      console.log(accounts)
   }

   useEffect(() => {
      checkIfWalletConnected()
   }, [])

   return (
      <TranscactionContext.Provider value={{ value: 'test' }}>
         {children}
      </TranscactionContext.Provider>
   )
}