//
//  TopConsumptionSDKBridge.m
//  MyWETopConsumptionReportsRN
//
//  Created by Rana on 13/05/2026.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(TopConsumptionSDKBridge, NSObject)

RCT_EXTERN_METHOD(openTopReports:(NSString *)serviceNumber)
RCT_EXTERN_METHOD(openConsumption:(NSString *)subscriberId)

@end
