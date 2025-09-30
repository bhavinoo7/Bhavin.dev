"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"

export function ResumePreview() {
  // Function to handle PDF download from Google Drive
  const handleDownload = () => {
    // Google Drive file ID - replace with your actual file ID
    const fileId = "YOUR_GOOGLE_DRIVE_FILE_ID"

    // Create the direct download link
    const downloadUrl = `https://drive.google.com/file/d/157A6LBR2sXHZPrCzAdM03NuB4_g5FUJl/view?usp=sharing`

    // Open the download URL in a new tab
    window.open(downloadUrl, "_blank")
  }

  return (
    <div className="opacity-100 translate-y-0 transition-all duration-500">
      <Card className="overflow-hidden border-2 border-primary/10 bg-background shadow-lg transition-all hover:shadow-xl dark:bg-background/5">
        <CardContent className="p-6">
          <div className="flex flex-col items-center justify-center">
            <div className="relative mb-4 w-full overflow-hidden rounded-md border border-border bg-white shadow-sm dark:bg-gray-900">
              {/* Resume preview image */}
              <img
                src="https://res.cloudinary.com/durtlcmnb/image/upload/v1759229920/Screenshot_2025-09-30_162822_ewmlyg.png"
                alt="Resume Preview"
                className="h-auto w-full object-cover"
              />
            </div>
            <Button variant="default" size="lg" className="flex items-center gap-2" onClick={handleDownload}>
              <Download className="h-5 w-5" />
              <span>Download Resume</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

