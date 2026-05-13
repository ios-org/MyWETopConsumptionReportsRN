import Foundation
import UIKit
import React
import TopConsumptionSDK 

@objc(TopConsumptionSDKBridge)
class TopConsumptionSDKBridge: NSObject {

  @objc(openTopReports:)
  func openTopReports(serviceNumber: String) {
    DispatchQueue.main.async {
      guard let rootVC = UIApplication.shared.windows.first?.rootViewController else { return }
      
      let sdkVC = TopConsumptionSDK.initiateTopReports(serviceNumber: serviceNumber)
      
      sdkVC.modalPresentationStyle = .fullScreen 
      
      rootVC.present(sdkVC, animated: true, completion: nil)
    }
  }

  @objc(openConsumption:)
  func openConsumption(subscriberId: String) {
    DispatchQueue.main.async {
      guard let rootVC = UIApplication.shared.windows.first?.rootViewController else { return }
      
      let sdkVC = TopConsumptionSDK.initiateConsumptionReports(subscriberId: subscriberId)
      
      sdkVC.modalPresentationStyle = .fullScreen 
      
      rootVC.present(sdkVC, animated: true, completion: nil)
    }
  }

  @objc static func requiresMainQueueSetup() -> Bool {
    return true
  }
}