'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Users, FileText, DollarSign, FolderOpen, MessageSquare,
  Send, Globe, Sparkles, CheckCircle2, Loader2, ExternalLink, AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';
import { useDashboardQuery } from '@/hooks/queries/useDashboardQuery';

export default function PremiumDashboard() {
  const { data, isLoading, error } = useDashboardQuery();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Alert variant="destructive" className="max-w-md">
          <AlertCircle className="h-5 w-5" />
          <AlertDescription>Failed to load dashboard. Please refresh.</AlertDescription>
        </Alert>
      </div>
    );
  }

  const { stats, categories, campaigns } = data.data;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">

        {/* Hero */}
        <header className="text-center space-y-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            BulkSMS
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nepal's most trusted bulk SMS platform for businesses
          </p>
        </header>

        {/* Main Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Total Contacts", value: stats.totalContactsAll.toLocaleString(), icon: Users, color: "text-blue-600" },
            { label: "Files Uploaded", value: stats.totalFilesUploaded, icon: FileText, color: "text-purple-600" },
            { label: "Amount Paid", value: `Rs. ${stats.totalPaidNPR.toLocaleString()}`, icon: DollarSign, color: "text-green-600" },
            { label: "Categories", value: stats.activeCategories, icon: FolderOpen, color: "text-orange-600" },
          ].map((stat, i) => (
            <Card key={i} className="p-6 text-center border shadow hover:shadow-xl transition-all hover:scale-105">
              <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Messages Sent", value: stats.totalMessagesSent.toLocaleString(), icon: MessageSquare },
            { label: "Avg Delivery Rate", value: `${stats.avgDeliveryRate}%`, icon: Globe },
            { label: "Valid Contacts", value: stats.totalContacts.toLocaleString(), icon: CheckCircle2 },
            { label: "Invalid Contacts", value: stats.totalInvalidContacts, icon: AlertCircle },
          ].map((stat, i) => (
            <Card key={i} className="p-5 border bg-muted/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
                <stat.icon className="h-9 w-9 text-primary opacity-70" />
              </div>
            </Card>
          ))}
        </div>

        {/* Categories & Campaigns */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Categories */}
          <div className="lg:col-span-2">
            <Card className="border shadow-lg">
              <div className="p-6 border-b bg-muted/30 flex justify-between items-center">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <FolderOpen className="h-7 w-7 text-primary" />
                  Your Categories
                </h2>
                <Button asChild size="sm">
                  <Link href="/categories">
                    View All <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="p-6">
                {categories.length === 0 ? (
                  <p className="text-center text-muted-foreground py-10">No categories yet</p>
                ) : (
                  <div className="space-y-4">
                    {categories.slice(0, 6).map((cat: any) => (
                      <div key={cat.id} className="flex justify-between items-center p-4 rounded-lg border bg-card hover:shadow transition">
                        <div>
                          <p className="font-semibold">{cat.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {cat.recipientCount.toLocaleString()} contacts
                          </p>
                        </div>
                        <Badge variant="secondary">{cat.recipientCount}+</Badge>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Recent Campaigns */}
          <div>
            <Card className="border shadow-lg h-full">
              <div className="p-6 border-b bg-muted/30 flex justify-between items-center">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <Sparkles className="h-7 w-7 text-primary" />
                  Recent Campaigns
                </h2>
                <Button asChild size="sm" variant="outline">
                  <Link href="/campaigns">
                    View All <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="p-6 space-y-4">
                {campaigns.length === 0 ? (
                  <p className="text-center text-muted-foreground py-10">No campaigns yet</p>
                ) : (
                  campaigns.slice(0, 6).map((c: any) => (
                    <div key={c.id} className="p-4 rounded-lg border bg-card hover:shadow transition">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{c.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {format(new Date(c.createdAt), "MMM dd, yyyy")}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge variant={c.paid ? "default" : "secondary"}>
                            {c.paid ? "Paid" : "Pending"}
                          </Badge>
                          <p className="text-xs font-bold mt-1">{c.deliveryRate}%</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="h-14 px-8 text-lg" asChild>
            <Link href="/categories/new">
              <FolderOpen className="mr-3 h-6 w-6" />
              Create New List
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2" asChild>
            <Link href="/campaigns/new">
              <Send className="mr-3 h-6 w-6" />
              New Campaign
            </Link>
          </Button>
        </div>

        {/* Footer */}
        <footer className="text-center py-12 border-t">
          <p className="text-3xl font-bold text-primary">BulkSMS Nepal</p>
          <p className="text-lg text-muted-foreground mt-2">
            Fast • Reliable • Made in Nepal
          </p>
        </footer>
      </div>
    </div>
  );
}