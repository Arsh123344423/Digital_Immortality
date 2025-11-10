"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Send,
  Brain,
  Lightbulb,
  BookOpen,
  Calculator,
  Sparkles,
  ArrowLeft,
  MoreHorizontal,
  History,
  Trash2,
  Plus,
} from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

const suggestedQuestions = [
  { question: "What is the theory of relativity?", icon: Brain },
  { question: "How do you approach creative problem-solving?", icon: Lightbulb },
  { question: "What is your view on imagination vs knowledge?", icon: BookOpen },
  { question: "Can you explain E=mc² in simple terms?", icon: Calculator },
  { question: "What advice do you have for young scientists?", icon: Sparkles },
  { question: "How did you develop your thought experiments?", icon: Brain },
]

export default function EinsteinChatPage() {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [chatHistory, setChatHistory] = useState([])
  const [mounted, setMounted] = useState(false)
  const scrollAreaRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      const savedHistory = localStorage.getItem("einstein-chat-history")
      if (savedHistory) {
        setChatHistory(JSON.parse(savedHistory))
      }
    }
  }, [mounted])

  useEffect(() => {
    if (mounted && chatHistory.length > 0) {
      localStorage.setItem("einstein-chat-history", JSON.stringify(chatHistory))
    }
  }, [chatHistory, mounted])

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const saveConversationToHistory = (userMessage, aiResponse) => {
    const conversation = {
      id: Date.now(),
      userMessage: userMessage.content,
      aiResponse: aiResponse,
      timestamp: new Date().toISOString(),
      preview: userMessage.content.substring(0, 50) + (userMessage.content.length > 50 ? "..." : ""),
    }
    setChatHistory((prev) => [conversation, ...prev].slice(0, 20))
  }

  const loadConversationFromHistory = (conversation) => {
    const userMsg = {
      id: Date.now(),
      sender: "user",
      content: conversation.userMessage,
      timestamp: new Date(conversation.timestamp),
    }
    const aiMsg = {
      id: Date.now() + 1,
      sender: "einstein",
      content: conversation.aiResponse,
      timestamp: new Date(conversation.timestamp),
    }
    setMessages([userMsg, aiMsg])
  }

  const clearHistory = () => {
    setChatHistory([])
    if (mounted) {
      localStorage.removeItem("einstein-chat-history")
    }
  }

  const startNewChat = () => {
    setMessages([])
    setInputValue("")
    setIsTyping(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      const userMessage = { id: Date.now(), sender: "user", content: inputValue, timestamp: new Date() }
      setMessages((prev) => [...prev, userMessage])
      setInputValue("")
      setIsTyping(true)

      const loadingMessage = {
        id: Date.now() + 1,
        sender: "einstein",
        content: "",
        timestamp: new Date(),
        isLoading: true,
      }
      setMessages((prev) => [...prev, loadingMessage])

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: inputValue }),
        })

        if (response.ok) {
          const reader = response.body.getReader()
          const decoder = new TextDecoder()
          let aiResponse = ""

          setMessages((prev) => prev.map((msg) => (msg.id === loadingMessage.id ? { ...msg, isLoading: false } : msg)))

          while (true) {
            const { done, value } = await reader.read()
            if (done) break

            const chunk = decoder.decode(value)
            aiResponse += chunk
            setMessages((prev) =>
              prev.map((msg) => (msg.id === loadingMessage.id ? { ...msg, content: aiResponse } : msg)),
            )
          }

          saveConversationToHistory(userMessage, aiResponse)
        } else {
          const errorResponse = "No API response - The Einstein API is currently unavailable. Please try again later."
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === loadingMessage.id
                ? {
                    ...msg,
                    content: errorResponse,
                    isLoading: false,
                  }
                : msg,
            ),
          )
          saveConversationToHistory(userMessage, errorResponse)
        }
      } catch (error) {
        console.error("Error:", error)
        const errorResponse =
          "No API response - Unable to connect to Einstein AI. Please check your connection and try again."
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === loadingMessage.id
              ? {
                  ...msg,
                  content: errorResponse,
                  isLoading: false,
                }
              : msg,
          ),
        )
        saveConversationToHistory(userMessage, errorResponse)
      } finally {
        setIsTyping(false)
      }
    }
  }

  const handleQuickQuestion = (question) => {
    setInputValue(question)
    inputRef.current?.focus()
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-black">
        <div className="border-b border-white/10 bg-black/80 backdrop-blur-xl sticky top-0 z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8 ring-2 ring-white/20">
                  <AvatarImage src="/albert-einstein-portrait.png" alt="Einstein" />
                  <AvatarFallback className="bg-white text-black text-sm font-bold">AE</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="font-semibold text-white">Einstein</h1>
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    AI Assistant
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="mb-6 sm:mb-8">
              <div className="relative mx-auto mb-4 sm:mb-6 w-fit">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full blur-md opacity-30 animate-pulse"></div>
                <Avatar className="h-20 w-20 sm:h-28 sm:w-28 mx-auto ring-4 ring-white/20 shadow-2xl relative">
                  <AvatarImage src="/albert-einstein-portrait.png" alt="Einstein" />
                  <AvatarFallback className="bg-white text-black text-2xl sm:text-3xl font-bold">AE</AvatarFallback>
                </Avatar>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text mb-2 sm:mb-3">
                Chat with Einstein
              </h2>
              <p className="text-gray-300 text-base sm:text-lg max-w-md mx-auto leading-relaxed px-4">
                Ask me anything about physics, philosophy, creativity, or life
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="border-b border-white/10 bg-black/80 backdrop-blur-xl sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8 ring-2 ring-white/20">
                <AvatarImage src="/albert-einstein-portrait.png" alt="Einstein" />
                <AvatarFallback className="bg-white text-black text-sm font-bold">AE</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="font-semibold text-white">Einstein</h1>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  AI Assistant
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {messages.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={startNewChat}
                className="text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <Plus className="h-4 w-4 mr-2" />
                New Chat
              </Button>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80 bg-black/90 backdrop-blur-xl border-white/10">
                <div className="px-3 py-2 text-sm font-medium text-white flex items-center gap-2">
                  <History className="h-4 w-4" />
                  Chat History
                </div>
                <DropdownMenuSeparator className="bg-white/10" />
                {chatHistory.length === 0 ? (
                  <div className="px-3 py-4 text-sm text-gray-400 text-center">No chat history yet</div>
                ) : (
                  <>
                    <ScrollArea className="max-h-60">
                      {chatHistory.map((conversation) => (
                        <DropdownMenuItem
                          key={conversation.id}
                          className="px-3 py-2 cursor-pointer hover:bg-white/10 focus:bg-white/10"
                          onClick={() => loadConversationFromHistory(conversation)}
                        >
                          <div className="flex flex-col gap-1 w-full">
                            <p className="text-sm text-white truncate">{conversation.preview}</p>
                            <p className="text-xs text-gray-400">
                              {new Date(conversation.timestamp).toLocaleDateString()} at{" "}
                              {new Date(conversation.timestamp).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                        </DropdownMenuItem>
                      ))}
                    </ScrollArea>
                    <DropdownMenuSeparator className="bg-white/10" />
                    <DropdownMenuItem
                      className="px-3 py-2 cursor-pointer hover:bg-red-500/20 focus:bg-red-500/20 text-red-400"
                      onClick={clearHistory}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Clear History
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        {messages.length === 0 && (
          <div className="text-center mb-8 sm:mb-12">
            <div className="mb-6 sm:mb-8">
              <div className="relative mx-auto mb-4 sm:mb-6 w-fit">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-full blur-md opacity-30 animate-pulse"></div>
                <Avatar className="h-20 w-20 sm:h-28 sm:w-28 mx-auto ring-4 ring-white/20 shadow-2xl relative">
                  <AvatarImage src="/albert-einstein-portrait.png" alt="Einstein" />
                  <AvatarFallback className="bg-white text-black text-2xl sm:text-3xl font-bold">AE</AvatarFallback>
                </Avatar>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold text-white bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text mb-2 sm:mb-3">
                Chat with Einstein
              </h2>
              <p className="text-gray-300 text-base sm:text-lg max-w-md mx-auto leading-relaxed px-4">
                Ask me anything about physics, philosophy, creativity, or life
              </p>
            </div>

            <div className="mb-6 sm:mb-8">
              <p className="text-sm font-medium text-gray-400 mb-4 sm:mb-6">Try asking:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto px-2">
                {suggestedQuestions.map((item, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="text-left justify-start h-auto p-3 sm:p-4 border-white/10 hover:border-white/30 hover:bg-white/5 hover:shadow-lg transition-all duration-300 bg-black/80 backdrop-blur-sm group hover:scale-[1.02] text-xs sm:text-sm min-h-[60px] sm:min-h-[70px] text-white"
                    onClick={() => handleQuickQuestion(item.question)}
                  >
                    <div className="p-1.5 sm:p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors duration-200 mr-2 sm:mr-3 flex-shrink-0">
                      <item.icon className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </div>
                    <span className="text-white font-medium leading-tight text-wrap break-words flex-1">
                      {item.question}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        {messages.length > 0 && (
          <div className="mb-6 sm:mb-8">
            <ScrollArea className="h-[50vh] sm:h-[60vh]" ref={scrollAreaRef}>
              <div className="space-y-4 sm:space-y-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 sm:gap-4 ${message.sender === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <Avatar className="h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 shadow-md">
                      {message.sender === "einstein" ? (
                        <>
                          <AvatarImage src="/albert-einstein-portrait.png" alt="Einstein" />
                          <AvatarFallback className="bg-white text-black font-bold text-xs sm:text-sm">
                            AE
                          </AvatarFallback>
                        </>
                      ) : (
                        <AvatarFallback className="bg-gray-600 text-white font-medium text-xs sm:text-sm">
                          You
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div
                      className={`flex-1 max-w-[85%] sm:max-w-[80%] lg:max-w-[75%] ${message.sender === "user" ? "text-right" : ""}`}
                    >
                      <div
                        className={`inline-block max-w-full p-3 sm:p-4 rounded-2xl shadow-sm ${
                          message.sender === "user"
                            ? "bg-white text-black ml-auto shadow-lg"
                            : "bg-black/80 backdrop-blur-sm text-white border border-white/10 shadow-md"
                        }`}
                      >
                        {message.isLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                              <div
                                className="w-2 h-2 bg-white rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              ></div>
                              <div
                                className="w-2 h-2 bg-white rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-300">Thinking...</span>
                          </div>
                        ) : (
                          <p className="text-xs sm:text-sm leading-relaxed break-words">{message.content}</p>
                        )}
                      </div>
                      <p
                        className={`text-xs text-gray-400 mt-1 sm:mt-2 ${message.sender === "user" ? "text-right" : ""}`}
                      >
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        )}

        <div className="max-w-3xl mx-auto">
          <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-3 sm:p-4 shadow-xl">
            <form onSubmit={handleSubmit} className="flex gap-2 sm:gap-3">
              <div className="flex-1 relative">
                <Input
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask Einstein anything..."
                  className="flex-1 bg-black/50 border-white/20 text-white placeholder:text-gray-400 focus:border-white/50 focus:ring-white/20 pr-10 sm:pr-12 h-10 sm:h-12 text-sm sm:text-base rounded-xl backdrop-blur-sm"
                  disabled={isTyping}
                />
                <div className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2">
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-white/60" />
                </div>
              </div>
              <Button
                type="submit"
                size="icon"
                disabled={!inputValue.trim() || isTyping}
                className="bg-white text-black hover:bg-gray-100 h-10 w-10 sm:h-12 sm:w-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <Send className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </form>
          </div>
          <p className="text-xs text-gray-400 mt-3 sm:mt-4 text-center px-4">
            Einstein AI can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </div>
  )
}
